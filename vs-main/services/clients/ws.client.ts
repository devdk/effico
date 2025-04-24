import fetchToken from 'src/utils/fetchToken';

const host = process.env.NEXT_PUBLIC_WS_HOST;
const endpoint = `wss://${host}/graphql/realtime`;

async function encodeAppSyncCredentials() {
  const creds = { host, authorization: await fetchToken() };
  return window.btoa(JSON.stringify(creds));
}

let ws: WebSocket | null = null;
let connectingPromise: Promise<WebSocket> | null = null;
const subscriptions: Map<string, (data: any) => void> = new Map();

function createWebSocketClient(): Promise<WebSocket> {
  if (ws && ws.readyState === WebSocket.OPEN) return Promise.resolve(ws);
  if (connectingPromise) return connectingPromise;

  connectingPromise = new Promise(async (resolve, reject) => {
    try {
      const header = await encodeAppSyncCredentials();
      const payload = window.btoa(JSON.stringify({}));
      const wsUrl = `${endpoint}?header=${header}&payload=${payload}`;
      ws = new WebSocket(wsUrl, ['graphql-ws']);
      ws.onopen = async () => {
        ws!.send(
          JSON.stringify({
            type: 'connection_init',
            headers: {
              host,
              authorization: await fetchToken(),
            },
            payload: {},
          })
        );
        resolve(ws!);
      };
      ws.onerror = (error) => reject(error);
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch (data.type) {
          case 'connection_ack':
            // Connection acknowledged.
            break;
          case 'data': {
            const callback = subscriptions.get(data.id);
            if (callback) {
              callback(data.payload.data);
            }
            break;
          }
          case 'complete':
            subscriptions.delete(data.id);
            break;
          default:
            break;
        }
      };
    } catch (error) {
      reject(error);
    }
  });

  return connectingPromise;
}

export async function subscribeToGraphQL(
  query: string,
  variables: Record<string, any>,
  onMessage: (data: any) => void
): Promise<string> {
  const client = await createWebSocketClient();
  const id = window.crypto.randomUUID();
  subscriptions.set(id, onMessage);
  const token = await fetchToken();
  client.send(
    JSON.stringify({
      id,
      type: 'start',
      payload: {
        extensions: {
          authorization: {
            authorization: token,
            host,
          },
        },
        data: JSON.stringify({ query, variables }),
      },
    })
  );
  return id;
}

export function unsubscribeFromGraphQL(id: string) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ id, type: 'stop' }));
    subscriptions.delete(id);
  }
}

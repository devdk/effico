import { gql } from 'services/clients/graphql.client';

export async function deleteEvent(id: string): Promise<void> {
  if (!id) {
    console.warn('No event found, skipping deletion');
    return;
  }

  const deleteMutation = `
    mutation MyMutation ($id: String!) {
        deleteVirtuosoEvents(input: {EventID: $id}) {
                EventID
            }
        }
      `;

  const variables = { id };
  const response = await gql(deleteMutation, variables);
  console.log('Deletion response:', response);
  console.log('Deletion errors:', response?.errors);

  // If the response includes GraphQL errors, fail the test by throwing
  if (response.errors && response.errors.length > 0) {
    throw new Error(
      `GraphQL deletion error(s): ${JSON.stringify(response.errors)}`
    );
  }

  if (!response.data.deleteVirtuosoEvents) {
    console.log(response?.errors);
    throw new Error('deleteVirtuosoEvents returned null or undefined');
  }
}

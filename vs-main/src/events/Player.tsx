import MuxPlayer from '@mux/mux-player-react';
import React from 'react';
import { useQuery } from 'react-query';
import { listStreamsAndRecordings } from 'services/events.service';
import {
  GetStreamsAndRecordingsQuery,
  Maybe,
  Recording,
} from 'services/types/generated';
import { Badge } from 'src/components/ui/badge';

export default function Player({
  eventId,
  defaultPlaybackId,
}: {
  eventId?: String;
  defaultPlaybackId?: String;
}) {
  const { isLoading, data } = useQuery<
    GetStreamsAndRecordingsQuery,
    unknown,
    any
  >([`streams-and-live`, eventId], listStreamsAndRecordings);

  console.log({ data, defaultPlaybackId });

  const defaultRecording = data?.recordings?.items?.find(
    (r: any) => r.playback_id === defaultPlaybackId
  );

  const otherRecordings = data?.recordings?.items?.filter(
    (i: any) => i.playback_id !== defaultPlaybackId
  );

  const live = data?.live?.items?.filter((i: any) => i.isLive === 'true');

  return (
    <div className="grid grid-cols-1 col-span-10 col-start-2 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {live?.length > 0 &&
        live.map((live: any) => (
          <Stage key={live.streamID} live recording={live} />
        ))}
      {defaultPlaybackId && defaultRecording && (
        <Stage defaultRecording recording={defaultRecording} />
      )}
      {otherRecordings?.length > 0 && (
        <div className="col-span-1 sm:col-span-2 md:col-span-3">
          <h2 className="font-semibold">Other Recordings</h2>
        </div>
      )}
      {otherRecordings?.map((recording: any) => (
        <Stage recording={recording} key={recording?.id} />
      ))}
    </div>
  );
}

function Stage({
  recording,
  live,
  defaultRecording,
}: {
  recording: Maybe<Recording>;
  eventId?: String;
  live?: boolean;
  defaultRecording?: boolean;
}) {
  return (
    <div
      className={`p-2 space-y-2 rounded-md bg-dark-base-200 ${defaultRecording || live ? 'sm:col-span-2 md:col-span-3' : 'col-span-1'}`}
    >
      {live && <Badge>Live</Badge>}
      {defaultRecording && <Badge>Default</Badge>}
      {/* <p className="flex items-center gap-2 text-xs">
        <p className="text-primary">{live ? 'Live' : 'Recorded'}</p>
      </p> */}
      <MuxPlayer
        loop={true}
        maxResolution="2160p"
        playbackId={
          live ? (recording as any)?.playbackURL : recording?.playback_id || ''
        }
        streamType={'on-demand'}
        accentColor="#965EFF"
        // metadata={{
        //   videoTitle: 'Test VOD',
        //   ViewerUserId: 'user-id-007',
        // }}
      />
    </div>
  );
}

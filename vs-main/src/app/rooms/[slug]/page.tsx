import React from 'react';
import Chat from 'src/chat';

export default function Room({ params }: { params: { slug: string } }) {
  return <Chat type="room" dmId={params.slug} />;
}

import React from 'react';
import Chat from 'src/chat';

export default function ChatPage({ params }: { params: { slug: string } }) {
  return <Chat type="chat" dmId={params.slug} />;
}

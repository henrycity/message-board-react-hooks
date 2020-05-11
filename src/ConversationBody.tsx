import React from 'react';

import { Message, User } from './types';

interface ConversationProps {
  conversation: Message[];
  users: User[];
}

export const ConversationBody: React.FunctionComponent<ConversationProps> = ({ conversation = [], users }) => {
  return (
    <>
      {conversation.map((message) => (
        <div key={message.id}>
          <div>{message.body}</div>
          <div>{users.find((user) => user.id === message.from_user_id)?.username}</div>
        </div>
      ))}
    </>
  );
};

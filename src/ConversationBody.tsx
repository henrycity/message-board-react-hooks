import React from 'react';
import { css } from '@emotion/core';

import { Message, User } from './types';
import { MessageItem } from './MessageItem';

interface ConversationProps {
  conversation: Message[];
  users: User[];
}

export const ConversationBody: React.FunctionComponent<ConversationProps> = ({ conversation = [], users }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        flex-basis: 300px;
        margin-left: 1%;
      `}
    >
      {conversation.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
};

import React from 'react';
import { Message } from './types';
import { ConversationItem } from './ConversationItem';
import { css } from '@emotion/core';

interface MessageItemProps {
  message: Message;
}

export const MessageItem: React.FunctionComponent<MessageItemProps> = ({ message }) => {
  return (
    <div
      css={css`
        height: 90px;
      `}
    >
      <ConversationItem
        username={message.user.username}
        avatarUrl={message.user.avatar_url}
        subtext={message.time}
      />
      <div
        css={css`
          text-align: left;
          padding-left: 10px;
        `}
      >
        {message.body}
      </div>
    </div>
  );
};

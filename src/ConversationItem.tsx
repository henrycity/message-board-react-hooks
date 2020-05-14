import React from 'react';
import { css } from '@emotion/core';

interface ConversationItemProps {
  username: string;
  avatarUrl: string;
  handleClick?: () => void;
  subtext: string;
  isSelected?: boolean;
}

export const ConversationItem: React.FunctionComponent<ConversationItemProps> = ({
  avatarUrl,
  username,
  handleClick,
  subtext,
  isSelected,
}) => {
  console.log('isSelected', isSelected);
  return (
    <div
      css={css`
        display: flex;
        height: 60px;
        align-items: center;
        background-color: ${isSelected ? 'darkgrey' : undefined};
        padding-left: 10px;
      `}
      onClick={handleClick ?? undefined}
    >
      <div>
        <img
          css={css`
            border-radius: 50%;
            width: 40px;
          `}
          alt="Avatar"
          src={avatarUrl}
        />
      </div>
      <div
        css={css`
          margin-left: 5%;
        `}
      >
        <div
          css={css`
            text-align: left;
          `}
        >
          {username}
        </div>
        <div
          css={css`
            color: gray;
            text-align: left;
          `}
        >
          {subtext}
        </div>
      </div>
    </div>
  );
};

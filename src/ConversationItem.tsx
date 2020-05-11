import React from 'react';
import { Conversation } from './types';

interface ConversationItemProps {
  conversation: Conversation;
  onClickConversation: (id: string) => void;
}

export const ConversationItem: React.FunctionComponent<ConversationItemProps> = ({
  conversation,
  onClickConversation,
}) => {
  const handleClick = () => {
    onClickConversation(conversation.id);
  };

  return (
    <div onClick={handleClick}>
      <div>{conversation.username}</div>
      <img alt="Avatar" src={conversation.userAvatarUrL} />
      <div>
        {conversation.unread_message_count
          ? `Has unread messages (${conversation.unread_message_count})`
          : 'All caught up'}
      </div>
    </div>
  );
};

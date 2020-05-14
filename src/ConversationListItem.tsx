import React from 'react';
import { Conversation } from './types';
import { ConversationItem } from './ConversationItem';

interface ConversationListItemProps {
  conversation: Conversation;
  onClickConversation: (id: string) => void;
  isSelected: boolean;
}

export const ConversationListItem: React.FunctionComponent<ConversationListItemProps> = ({
  conversation,
  onClickConversation,
  isSelected,
}) => {
  const handleClick = () => {
    onClickConversation(conversation.id);
  };

  const subtext = conversation.unread_message_count
    ? `Has unread messages (${conversation.unread_message_count})`
    : 'All caught up';

  return (
    <ConversationItem
      handleClick={handleClick}
      username={conversation.username}
      avatarUrl={conversation.userAvatarUrL}
      subtext={subtext}
      isSelected={isSelected}
    />
  );
};

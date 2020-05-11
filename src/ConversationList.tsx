import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

import { ConversationResponse, Conversation } from './types';
import { ConversationItem } from './ConversationItem';

interface ConversationListProps {
  setSelectedConversationId: Dispatch<SetStateAction<string>>;
}

export const ConversationList: React.FunctionComponent<ConversationListProps> = ({ setSelectedConversationId }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversationList = async () => {
      const { data } = await axios.get('https://ui-developer-backend.herokuapp.com/api/conversations');
      const responses: AxiosResponse[] = await axios.all(
        data.map(({ with_user_id }: ConversationResponse) =>
          axios.get(`https://ui-developer-backend.herokuapp.com/api/users/${with_user_id}`),
        ),
      );
      const conversationsWithUserInformation = data.map((conversation: ConversationResponse) => {
        const userResponse: AxiosResponse | undefined = responses.find(
          (response) => response.data.id === conversation.with_user_id,
        );
        return {
          ...conversation,
          username: userResponse?.data.username,
          userAvatarUrL: userResponse?.data.avatar_url,
        };
      });
      setConversations(conversationsWithUserInformation);
      setSelectedConversationId(conversationsWithUserInformation[0].id);
    };

    getConversationList();
  }, []);

  const onClickConversation = (conversationId: string) => {
    setSelectedConversationId(conversationId);
  };

  return (
    <div>
      {conversations.map((conversation: Conversation) => (
        <ConversationItem key={conversation.id} conversation={conversation} onClickConversation={onClickConversation} />
      ))}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { css } from '@emotion/core';

import './App.css';

import { ConversationBody } from './ConversationBody';
import { ConversationList } from './ConversationList';
import { Conversations, MessageResponse, User } from './types';

const App = () => {
  const [selectedConversationId, setSelectedConversationId] = useState('');
  const [conversations, setConversations] = useState<Conversations>({});
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getConversation = async () => {
      const { data } = await axios.get(
        `https://ui-developer-backend.herokuapp.com/api/conversations/${selectedConversationId}/messages`,
      );
      const conversation = data.map((message: MessageResponse) => ({
        id: message.id,
        body: message.body,
        time: new Date(message.created_at).toLocaleString(),
        user: users.find(({ id }) => id === message.from_user_id) ?? {},
      }));
      const updatedConversations = {
        ...conversations,
        [selectedConversationId]: conversation,
      };
      setConversations(updatedConversations);
    };

    const getUsers = async () => {
      const { data } = await axios.get(`https://ui-developer-backend.herokuapp.com/api/users`);
      setUsers(data);
    };

    getUsers();
    if (!conversations[selectedConversationId]) {
      getConversation();
    }
  }, [selectedConversationId]);

  return (
    <div
      className="App"
      css={css`
        display: flex;
      `}
    >
      <ConversationList
        selectedConversationId={selectedConversationId}
        setSelectedConversationId={setSelectedConversationId}
      />
      <ConversationBody conversation={conversations[selectedConversationId]} users={users} />
    </div>
  );
};

export default App;

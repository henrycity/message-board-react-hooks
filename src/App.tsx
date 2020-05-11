import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { css, jsx } from '@emotion/core';

import './App.css';

import { ConversationBody } from './ConversationBody';
import { ConversationList } from './ConversationList';
import { Conversations } from './types';

const App = () => {
  const [selectedConversationId, setSelectedConversationId] = useState('');
  const [conversations, setConversations] = useState<Conversations>({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      const { data } = await axios.get(
        `https://ui-developer-backend.herokuapp.com/api/conversations/${selectedConversationId}/messages`,
      );
      const updatedConversations = {
        ...conversations,
        [selectedConversationId]: data,
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
        background-color: green;
      `}
    >
      <ConversationList setSelectedConversationId={setSelectedConversationId} />
      <ConversationBody conversation={conversations[selectedConversationId]} users={users} />
    </div>
  );
};

export default App;

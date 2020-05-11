export interface ConversationResponse {
  id: string;
  with_user_id: string;
  unread_message_count: number;
}

export interface Conversation {
  id: string;
  with_user_id: string;
  unread_message_count: number;
  username: string;
  userAvatarUrL: string;
}

export interface Message {
  id: string;
  body: string;
  from_user_id: string;
  created_at: string;
}

export interface User {
  id: string;
  username: string;
  avatar_url: string;
}

export interface Conversations {
  [key: string]: Message[];
}

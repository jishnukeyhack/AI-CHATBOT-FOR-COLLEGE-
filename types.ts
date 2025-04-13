export interface Message {
  id: string;
  content: string;
  role: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatbotResponse {
  content: string;
  links?: string[];
}

export interface ChatbotState {
  messages: Message[];
  isTyping: boolean;
}
export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}

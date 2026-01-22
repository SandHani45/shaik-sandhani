
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

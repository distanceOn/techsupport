export type HeaderLinkType = {
  to: string;
  text: string;
};

export type ModalType = "create" | "finish" | null;

export type TemplateProps = {
  children: React.ReactNode;
};

export type PetitionDefineType = {
  id: number;
};

export type ChatMessage = {
  sender: string;
  message: string;
  timestamp: string;
};

export type Petition = {
  theme: string;
  id: number;
  date: string;
  text: string;
  images: string[];
  finish: boolean;
  chat: ChatMessage[];
};

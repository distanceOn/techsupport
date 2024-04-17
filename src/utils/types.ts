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

export type PetitionImagesType = string[];

export type ChatMessage = {
  sender: string;
  message: string;
  timestamp: string;
};

export type PetitionEditableFields = {
  theme: string;
  text: string;
  images: PetitionImagesType;
};

export type Petition = PetitionEditableFields & {
  id: number;
  date: string;
  finish: boolean;
  chat: ChatMessage[];
};

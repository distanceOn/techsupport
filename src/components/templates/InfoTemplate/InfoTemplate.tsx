import { ReactNode } from "react";

type InfoTemplateProps = {
  info: ReactNode;
  chat: ReactNode;
};

export const InfoTemplate = ({ info, chat }: InfoTemplateProps) => {
  return (
    <section>
      <div>{info}</div>
      <div>{chat}</div>
    </section>
  );
};

import { ReactNode } from "react";

import S from "./InfoTemplate.module.scss";

type InfoTemplateProps = {
  info: ReactNode;
  chat: ReactNode;
};

export const InfoTemplate = ({ info, chat }: InfoTemplateProps) => {
  return (
    <section className={S.container}>
      <div className={S.info}>{info}</div>
      <div className={S.chat}>{chat}</div>
    </section>
  );
};

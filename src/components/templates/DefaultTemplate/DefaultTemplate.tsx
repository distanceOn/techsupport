import { TemplateProps } from "../../../utils/types";
import { Header } from "../../organisms/Header/Header";

import S from "./DefaultTemplate.module.scss";

export const DefaultTemplate = ({ children }: TemplateProps) => {
  return (
    <div className={S.container}>
      <Header />
      <main className={S.main}>{children}</main>
    </div>
  );
};

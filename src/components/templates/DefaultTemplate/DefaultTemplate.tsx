import { TemplateProps } from "../../../utils/types";
import { Header } from "../../organisms/Header/Header";

export const DefaultTemplate = ({ children }: TemplateProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

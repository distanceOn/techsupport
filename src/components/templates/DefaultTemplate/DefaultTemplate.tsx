import { Header } from "../../organisms/Header/Header";

type DefaultTemplateType = {
  content: React.ReactNode;
};
export const DefaultTemplate = ({ content }: DefaultTemplateType) => {
  return (
    <>
      <Header />
      <main>{content}</main>
    </>
  );
};

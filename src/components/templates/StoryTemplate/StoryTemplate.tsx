import { useModal } from "../../../hooks/useModal";
import { TemplateProps } from "../../../utils/types";
import { Btn } from "../../atoms/Btn/Btn";
import { Title } from "../../atoms/Title/Title";

import S from "./StoryTemplate.module.scss";

export const StoryTemplate = ({ children }: TemplateProps) => {
  const { openCreateModal } = useModal();
  return (
    <section>
      <div className={S.title}>
        <Title color="white" size="default">
          История обращений
        </Title>
        <Btn color="green" type="button" onClick={openCreateModal}>
          Новое обращение
        </Btn>
      </div>

      {children}
    </section>
  );
};

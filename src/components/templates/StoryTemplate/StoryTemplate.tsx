import { useModal } from "../../../hooks/useModal";
import { TemplateProps } from "../../../utils/types";
import { Btn } from "../../atoms/Btn/Btn";
import { Title } from "../../atoms/Title/Title";

export const StoryTemplate = ({ children }: TemplateProps) => {
  const { openCreateModal } = useModal();
  return (
    <section>
      <div>
        <Title color="white" size="default">
          История обращений
        </Title>
        <Btn color="grey" type="button" onClick={openCreateModal}>
          Новое обращение
        </Btn>
      </div>

      {children}
    </section>
  );
};

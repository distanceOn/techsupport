import { ChangeEvent } from "react";
import { InputField } from "../../atoms/InputField/InputField";
import { Title } from "../../atoms/Title/Title";

import S from "./Selection.module.scss";

type SelectionProps = {
  selectedTopic: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  customTopic: string;
  handleCustomTopicChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Selection = ({
  selectedTopic,
  handleChange,
  customTopic,
  handleCustomTopicChange,
}: SelectionProps) => {
  return (
    <div className={S.container}>
      <div className={S.selection}>
        <Title color="white" size="min">
          Тема:
        </Title>
        <select
          className={S.select}
          required
          value={selectedTopic}
          onChange={handleChange}
        >
          <option disabled value="default">
            Выберите тему
          </option>
          <option value="Спорт">Спорт</option>
          <option value="Игры">Игры</option>
          <option value="Бизнес">Бизнес</option>
          <option value="other">Другое</option>
        </select>
      </div>
      <div className={S.input}>
        {selectedTopic === "other" && (
          <InputField
            type="text"
            value={customTopic}
            onChange={handleCustomTopicChange}
          />
        )}
      </div>
    </div>
  );
};

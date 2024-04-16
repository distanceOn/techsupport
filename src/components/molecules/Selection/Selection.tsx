import { ChangeEvent } from "react";
import { InputField } from "../../atoms/InputField/InputField";
import { Title } from "../../atoms/Title/Title";

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
    <div>
      <Title level={3} text="Тема:" />
      <select required value={selectedTopic} onChange={handleChange}>
        <option disabled value="default">
          Выберите тему
        </option>
        <option value="sport">Спорт</option>
        <option value="games">Игры</option>
        <option value="business">Бизнес</option>
        <option value="other">Другое</option>
      </select>
      {selectedTopic === "other" && (
        <InputField
          label="Введите вашу тему:"
          type="text"
          id="customTopic"
          value={customTopic}
          onChange={handleCustomTopicChange}
        />
      )}
    </div>
  );
};

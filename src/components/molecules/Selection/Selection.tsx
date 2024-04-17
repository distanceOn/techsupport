import { InputField } from "../../atoms/InputField/InputField";
import { Title } from "../../atoms/Title/Title";

import S from "./Selection.module.scss";
import { SelectionProps } from "./types";

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
          <option value="CarX Drift">CarX Drift</option>
          <option value="CarX Store">CarX Store</option>
          <option value="Xlab">Xlab</option>
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

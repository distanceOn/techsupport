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
      <h3>Тема:</h3>
      <select value={selectedTopic} onChange={handleChange}>
        <option disabled value="default">
          Выберите тему
        </option>
        <option value="sport">Спорт</option>
        <option value="чтото">Чтото</option>
        <option value="когото">когото</option>
        <option value="другое">Другое</option>
      </select>
      {selectedTopic === "другое" && (
        <div>
          <label htmlFor="customTopic">Введите вашу тему:</label>
          <input
            type="text"
            id="customTopic"
            value={customTopic}
            onChange={handleCustomTopicChange}
          />
        </div>
      )}
    </div>
  );
};

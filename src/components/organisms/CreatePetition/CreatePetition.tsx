import { Selection } from "../../molecules/Selection/Selection";
import { useCreatePetition } from "./useCreatePetition";

export const CreatePetition = () => {
  const {
    selectedTopic,
    handleSelectChange,
    customTopic,
    handleCustomTopicChange,
    handleCreatePetition,
    text,
    handleSetText,
    error,
  } = useCreatePetition();
  return (
    <form onSubmit={handleCreatePetition}>
      <Selection
        handleChange={handleSelectChange}
        selectedTopic={selectedTopic}
        customTopic={customTopic}
        handleCustomTopicChange={handleCustomTopicChange}
      />
      <textarea
        required
        value={text}
        onChange={handleSetText}
        cols={30}
        rows={10}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Создать</button>
    </form>
  );
};

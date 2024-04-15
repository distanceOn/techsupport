import { Selection } from "../../molecules/Selection/Selection";
import { useCreatePetition } from "./useCreatePetition";

export const CreatePetition = () => {
  const {
    selectedTopic,
    handleSelectChange,
    customTopic,
    handleCustomTopicChange,
  } = useCreatePetition();
  return (
    <form action="#">
      <Selection
        handleChange={handleSelectChange}
        selectedTopic={selectedTopic}
        customTopic={customTopic}
        handleCustomTopicChange={handleCustomTopicChange}
      />
      <textarea cols={30} rows={10} />
      <button type="submit">Создать</button>
    </form>
  );
};

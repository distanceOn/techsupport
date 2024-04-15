import { Selection } from "../../molecules/Selection/Selection";
import { useCreatePetition } from "./useCreatePetition";

import S from "./CreatePetition.module.scss";
import { PictureList } from "../../molecules/PictureList/PictureList";

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
    handleImageChange,
    images,
  } = useCreatePetition();
  return (
    <form className={S.form} onSubmit={handleCreatePetition}>
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
      <PictureList pictures={images} />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Создать</button>
    </form>
  );
};

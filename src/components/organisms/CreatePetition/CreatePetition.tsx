import { Selection } from "../../molecules/Selection/Selection";
import { useCreatePetition } from "./useCreatePetition";

import S from "./CreatePetition.module.scss";
import { PictureList } from "../../molecules/PictureList/PictureList";
import { AreaField } from "../../atoms/AreaField/AreaField";
import { ImageField } from "../../atoms/ImageField/ImageField";
import { Btn } from "../../atoms/Btn/Btn";

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
      <AreaField text={text} onChange={handleSetText} />
      <PictureList pictures={images} />
      <ImageField onChange={handleImageChange} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Btn color="grey" type="submit" onClick={() => {}}>
        Создать
      </Btn>
    </form>
  );
};

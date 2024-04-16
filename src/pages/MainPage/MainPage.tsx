import { StoryPetition } from "../../components/organisms/StoryPetition/StoryPetition";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { ModalTemplate } from "../../components/templates/ModalTemplate/ModalTempate";
import { StoryTemplate } from "../../components/templates/StoryTemplate/StoryTemplate";

export const MainPage = () => {
  return (
    <>
      <DefaultTemplate
        children={<StoryTemplate children={<StoryPetition />} />}
      />
      <ModalTemplate />
    </>
  );
};

import { StoryPetition } from "../../components/organisms/StoryPetition/StoryPetition";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { ModalTemplate } from "../../components/templates/ModalTemplate/ModalTempate";
import { StoryTemplate } from "../../components/templates/StoryTemplate/StoryTemplate";

import S from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={S.page}>
      <DefaultTemplate
        children={<StoryTemplate children={<StoryPetition />} />}
      />
      <ModalTemplate />
    </div>
  );
};

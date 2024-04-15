import { StoryPetition } from "../../components/organisms/StoryPetition/StoryPetition";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { StoryTemplate } from "../../components/templates/StoryTemplate/StoryTemplate";

export const MainPage = () => {
  return (
    <DefaultTemplate content={<StoryTemplate content={<StoryPetition />} />} />
  );
};

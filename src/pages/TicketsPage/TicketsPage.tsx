import { StoryPetition } from "../../components/organisms/StoryPetition/StoryPetition";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";

export const TicketsPage = () => {
  return (
    <DefaultTemplate
      children={
        <div style={{ paddingTop: "1vw" }}>
          <StoryPetition />
        </div>
      }
    />
  );
};

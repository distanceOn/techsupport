import { useParams } from "react-router-dom";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { InfoTemplate } from "../../components/templates/InfoTemplate/InfoTemplate";
import { InfoPetition } from "../../components/organisms/InfoPetition/InfoPetition";
import { Chat } from "../../components/organisms/Chat/Chat";

export const PetitionPage = () => {
  const { id } = useParams();
  return (
    <DefaultTemplate
      content={
        <InfoTemplate info={<InfoPetition id={id} />} chat={<Chat id={id} />} />
      }
    />
  );
};

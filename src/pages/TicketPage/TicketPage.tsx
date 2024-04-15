import { useParams } from "react-router-dom";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { InfoTemplate } from "../../components/templates/InfoTemplate/InfoTemplate";
import { InfoPetition } from "../../components/organisms/InfoPetition/InfoPetition";
import { Chat } from "../../components/organisms/Chat/Chat";
import { ModalTemplate } from "../../components/templates/ModalTemplate/ModalTempate";

export const PetitionPage = () => {
  const { id } = useParams();
  const totalId = Number(id);
  return (
    <>
      <DefaultTemplate
        content={
          <InfoTemplate
            info={<InfoPetition id={totalId} />}
            chat={<Chat id={totalId} />}
          />
        }
      />
      <ModalTemplate />
    </>
  );
};

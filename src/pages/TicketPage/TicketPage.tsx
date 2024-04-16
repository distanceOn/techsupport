import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { InfoTemplate } from "../../components/templates/InfoTemplate/InfoTemplate";
import { InfoPetition } from "../../components/organisms/InfoPetition/InfoPetition";
import { Chat } from "../../components/organisms/Chat/Chat";
import { ModalTemplate } from "../../components/templates/ModalTemplate/ModalTempate";
import { useNav } from "../../hooks/useNav";

export const PetitionPage = () => {
  const { id } = useNav();
  return (
    <>
      <DefaultTemplate
        content={
          <InfoTemplate
            info={<InfoPetition id={id} />}
            chat={<Chat id={id} />}
          />
        }
      />
      <ModalTemplate />
    </>
  );
};

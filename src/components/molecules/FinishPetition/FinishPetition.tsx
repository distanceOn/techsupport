import S from "./FinishPetition.module.scss";
import { useNav } from "../../../hooks/useNav";
import { useModal } from "../../../hooks/useModal";
import { Title } from "../../atoms/Title/Title";
import { Btn } from "../../atoms/Btn/Btn";
import { useData } from "../../../hooks/useData";

export const FinishPetition = () => {
  const { finishCurrentPetition } = useData();
  const { id } = useNav();
  const { toCloseModal } = useModal();

  const handleFinishPetition = () => {
    finishCurrentPetition(id);
    toCloseModal();
  };

  return (
    <div className={S.content}>
      <div className={S.title}>
        <Title color="white" size="small">
          Закрыть обращение?
        </Title>
      </div>
      <div className={S.btns}>
        <Btn color="green" type="button" onClick={handleFinishPetition}>
          Да
        </Btn>
        <Btn color="grey" type="button" onClick={toCloseModal}>
          Нет
        </Btn>
      </div>
    </div>
  );
};

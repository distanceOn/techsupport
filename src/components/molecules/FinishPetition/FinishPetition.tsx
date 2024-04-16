import { useAppDispatch } from "../../../app/reducers/reduxHooks";
import { toFinishPetition } from "../../../app/reducers/dataSlice";

import S from "./FinishPetition.module.scss";
import { useNav } from "../../../hooks/useNav";
import { useModal } from "../../../hooks/useModal";
import { Title } from "../../atoms/Title/Title";
import { Btn } from "../../atoms/Btn/Btn";

export const FinishPetition = () => {
  const dispatch = useAppDispatch();
  const { id } = useNav();
  const { toCloseModal } = useModal();

  const handleFinishPetition = () => {
    dispatch(toFinishPetition(id));
    toCloseModal();
  };

  return (
    <div className={S.content}>
      <Title color="white" size="small">
        Закрыть обращение?
      </Title>
      <div>
        <Btn type="button" text="Да" onClick={handleFinishPetition} />
        <Btn type="button" text="Нет" onClick={toCloseModal} />
      </div>
    </div>
  );
};

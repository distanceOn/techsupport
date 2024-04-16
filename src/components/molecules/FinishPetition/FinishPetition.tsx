import { useAppDispatch } from "../../../app/reducers/reduxHooks";
import { toFinishPetition } from "../../../app/reducers/dataSlice";

import S from "./FinishPetition.module.scss";
import { useNav } from "../../../hooks/useNav";
import { useModal } from "../../../hooks/useModal";

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
      <h2>Закрыть обращение?</h2>
      <div>
        <button className={S.button} onClick={handleFinishPetition}>
          Yes
        </button>
        <button className={S.button} onClick={toCloseModal}>
          No
        </button>
      </div>
    </div>
  );
};

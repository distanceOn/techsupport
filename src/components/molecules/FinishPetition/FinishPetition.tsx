import { useAppDispatch } from "../../../app/reducers/reduxHooks";
import { closeModal } from "../../../app/reducers/modalSlice";
import { toFinishPetition } from "../../../app/reducers/dataSlice";
import { useParams } from "react-router-dom";

import S from "./FinishPetition.module.scss";

export const FinishPetition = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleFinishPetition = () => {
    dispatch(toFinishPetition(Number(id)));
    dispatch(closeModal());
  };

  return (
    <div className={S.content}>
      <h2>Закрыть обращение?</h2>
      <div>
        <button className={S.button} onClick={handleFinishPetition}>
          Yes
        </button>
        <button className={S.button} onClick={handleClose}>
          No
        </button>
      </div>
    </div>
  );
};

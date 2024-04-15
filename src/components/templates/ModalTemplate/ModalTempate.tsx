import S from "./ModalTemplate.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/reducers/reduxHooks";
import { closeModal } from "../../../app/reducers/modalSlice";
import { getModalByType } from "./utils";

export const ModalTemplate = () => {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useAppSelector((state) => state.modal);
  const onClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  const modal = getModalByType(type);

  return (
    <div className={S.overlay} onClick={onClose}>
      <div className={S.content} onClick={(e) => e.stopPropagation()}>
        {modal}
      </div>
    </div>
  );
};

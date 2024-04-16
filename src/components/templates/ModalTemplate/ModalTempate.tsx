import S from "./ModalTemplate.module.scss";
import { useModal } from "../../../hooks/useModal";

export const ModalTemplate = () => {
  const { isModalOpen, totalContent, toCloseModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className={S.overlay} onClick={toCloseModal}>
      <div className={S.content} onClick={(e) => e.stopPropagation()}>
        {totalContent}
      </div>
    </div>
  );
};

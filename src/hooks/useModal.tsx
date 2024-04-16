import { closeModal, openModal } from "../app/reducers/modalSlice";
import { useAppDispatch, useAppSelector } from "../app/reducers/reduxHooks";
import { FinishPetition } from "../components/molecules/FinishPetition/FinishPetition";
import { CreatePetition } from "../components/organisms/CreatePetition/CreatePetition";
import { ModalType } from "../utils/types";

export const useModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useAppSelector((state) => state.modal);

  const modalContent = {
    create: <CreatePetition />,
    finish: <FinishPetition />,
  };

  const getContentByType = (modalType: ModalType) => {
    if (modalType === null) return null;
    return modalContent[modalType];
  };

  const openCreateModal = () => {
    dispatch(openModal("create"));
  };

  const toCloseModal = () => {
    dispatch(closeModal());
  };

  const totalContent = getContentByType(type);

  return {
    isModalOpen: isOpen,
    totalContent,
    toCloseModal,
    openCreateModal,
  };
};

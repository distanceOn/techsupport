import { ModalType } from "../../../utils/types";
import { CreatePetition } from "../../organisms/CreatePetition/CreatePetition";

const modals = {
  create: <CreatePetition />,
};

export const getModalByType = (modalType: ModalType) => {
  if (modalType === null) return null;
  return modals[modalType];
};

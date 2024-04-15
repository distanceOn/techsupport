import { ModalType } from "../../../utils/types";
import { FinishPetition } from "../../molecules/FinishPetition/FinishPetition";
import { CreatePetition } from "../../organisms/CreatePetition/CreatePetition";

const modals = {
  create: <CreatePetition />,
  finish: <FinishPetition />,
};

export const getModalByType = (modalType: ModalType) => {
  if (modalType === null) return null;
  return modals[modalType];
};

import { addPetition, toFinishPetition } from "../app/reducers/dataSlice";
import { useAppDispatch } from "./reduxHooks";
import { PetitionEditableFields } from "../utils/types";

export const useData = () => {
  const dispatch = useAppDispatch();

  const createNewPetition = (totalPetition: PetitionEditableFields) => {
    dispatch(addPetition(totalPetition));
  };

  const finishCurrentPetition = (id: number) => {
    dispatch(toFinishPetition(id));
  };

  return {
    createNewPetition,
    finishCurrentPetition,
  };
};

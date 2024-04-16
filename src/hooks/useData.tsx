import { addPetition } from "../app/reducers/dataSlice";
import { useAppDispatch } from "../app/reducers/reduxHooks";

export const useData = () => {
  const dispatch = useAppDispatch();

  const createNewPetition = (totalPetition: {
    theme: string;
    text: string;
    images: string[];
  }) => {
    dispatch(addPetition(totalPetition));
  };

  return {
    createNewPetition,
  };
};

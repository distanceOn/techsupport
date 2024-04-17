import { useAppSelector } from "./reduxHooks";
import { PetitionDefineType } from "../utils/types";

const mockPetition = {
  theme: "",
  id: 0,
  date: "",
  text: "",
  images: [],
  finish: false,
  chat: [],
};

export const usePetition = ({ id }: PetitionDefineType) => {
  const { petitions } = useAppSelector((state) => state.data);

  const getPetitionById = (id: number) => {
    return petitions.find((p) => p.id === id) || mockPetition;
  };

  const petition = getPetitionById(id);

  return {
    ...petition,
  };
};

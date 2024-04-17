import { useAppSelector } from "./reduxHooks";
import { PetitionDefineType } from "../utils/types";
import { useEffect } from "react";
import { useNav } from "./useNav";

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
  const { goToMain } = useNav();
  const { petitions } = useAppSelector((state) => state.data);

  const getPetitionById = (id: number) => {
    return petitions.find((p) => p.id === id);
  };

  useEffect(() => {
    if (!getPetitionById(id)) {
      goToMain();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const petition = getPetitionById(id) || mockPetition;

  return {
    ...petition,
  };
};

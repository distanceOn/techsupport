import { useAppSelector } from "../../../hooks/reduxHooks";
import { PetitionCard } from "../PetitionCard/PetitionCard";

import S from "./StoryPetition.module.scss";

export const StoryPetition = () => {
  const { petitions } = useAppSelector((state) => state.data);

  const reversedPetitions = [...petitions].reverse();

  return (
    <ul className={S.story}>
      {reversedPetitions.map((petition, index) => (
        <li key={`key-${petition.id}-${index}`}>
          <PetitionCard data={petition} />
        </li>
      ))}
    </ul>
  );
};

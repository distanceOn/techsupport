import { useAppSelector } from "../../../app/reducers/reduxHooks";
import { PetitionCard } from "../PetitionCard/PetitionCard";

import S from "./StoryPetition.module.scss";

export const StoryPetition = () => {
  const { petitions } = useAppSelector((state) => state.data);

  const reversedPetitions = [...petitions].reverse();

  return (
    <ul className={S.story}>
      {reversedPetitions.map(({ id, text }, index) => (
        <li key={`key-${id}-${index}`}>
          <PetitionCard id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};

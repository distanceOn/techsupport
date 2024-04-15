import { useAppSelector } from "../../../app/reducers/reduxHooks";
import { PetitionCard } from "../../molecules/PetitionCard/PetitionCard";

import S from "./StoryPetition.module.scss";

export const StoryPetition = () => {
  const { petitions } = useAppSelector((state) => state.data);

  const reversedPetitions = [...petitions].reverse();

  return (
    <ul className={S.story}>
      {reversedPetitions.map(({ theme, id, date, text }) => (
        <PetitionCard theme={theme} id={id} date={date} text={text} />
      ))}
    </ul>
  );
};
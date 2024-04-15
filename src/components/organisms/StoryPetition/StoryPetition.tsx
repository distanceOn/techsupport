import { PetitionCard } from "../../molecules/PetitionCard/PetitionCard";

import S from "./StoryPetition.module.scss";

export const StoryPetition = () => {
  const elements = [
    {
      theme: "Спорт",
      id: 1,
      date: "22.02.2024",
      text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
    },
    {
      theme: "Спорт",
      id: 2,
      date: "22.02.2024",
      text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
    },
    {
      theme: "Спорт",
      id: 2,
      date: "22.02.2024",
      text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
    },
  ];

  return (
    <ul className={S.story}>
      {elements.map(({ theme, id, date, text }) => (
        <PetitionCard theme={theme} id={id} date={date} text={text} />
      ))}
    </ul>
  );
};

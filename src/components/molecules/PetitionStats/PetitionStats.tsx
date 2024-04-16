import { Title } from "../../atoms/Title/Title";
import S from "./PetitionStats.module.scss";

type PetitionStatsProps = {
  id: number;
  finish: boolean;
  theme: string;
  date: string;
};

export const PetitionStats = ({
  id,
  finish,
  theme,
  date,
}: PetitionStatsProps) => {
  return (
    <div className={`${S.info} ${finish ? S.finish_true : S.finish_false}`}>
      <Title text={id} level={4} />
      <Title text={theme} level={3} />
      <Title text={date} level={4} />
    </div>
  );
};

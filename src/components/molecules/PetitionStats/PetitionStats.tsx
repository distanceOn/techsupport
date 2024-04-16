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
      <Title color="white" size="min">
        {id}
      </Title>
      <Title color="white" size="small">
        {theme}
      </Title>
      <Title color="white" size="small">
        {date}
      </Title>
    </div>
  );
};

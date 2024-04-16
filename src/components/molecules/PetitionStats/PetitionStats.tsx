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
      <h4>{id}</h4>
      <h3>{theme}</h3>
      <h4>{date}</h4>
    </div>
  );
};

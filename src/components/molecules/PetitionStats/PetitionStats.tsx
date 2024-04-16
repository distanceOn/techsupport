import { useData } from "../../../hooks/useData";
import { PetitionDefineType } from "../../../utils/types";

import S from "./PetitionStats.module.scss";

export const PetitionStats = ({ id }: PetitionDefineType) => {
  const { finish, id: totalId, theme, date } = useData({ id });

  return (
    <div className={`${S.info} ${finish ? S.finish_true : S.finish_false}`}>
      <h4>{totalId}</h4>
      <h3>{theme}</h3>
      <h4>{date}</h4>
    </div>
  );
};

import { Icon } from "../../atoms/Icon/Icon";
import S from "./PetitionCard.module.scss";
import { PetitionStats } from "../../molecules/PetitionStats/PetitionStats";
import { Petition } from "../../../utils/types";
import { useNav } from "../../../hooks/useNav";

type PetitionCardProps = {
  data: Petition;
};

export const PetitionCard = ({ data }: PetitionCardProps) => {
  const { id, text, finish, theme, date } = data;

  const { goToPetition } = useNav(id);

  return (
    <div onClick={goToPetition} className={S.card}>
      <PetitionStats theme={theme} date={date} finish={finish} id={id} />
      <div className={S.text}>
        <p>{text}</p>
      </div>
      <div className={S.icon}>
        <Icon type="arrow" />
      </div>
    </div>
  );
};
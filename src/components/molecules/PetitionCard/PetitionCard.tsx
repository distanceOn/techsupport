import { Icon } from "../../atoms/Icon/Icon";
import S from "./PetitionCard.module.scss";

type PetitionCardProps = {
  theme: string;
  id: number;
  date: string;
  text: string;
};
export const PetitionCard = ({ theme, id, date, text }: PetitionCardProps) => {
  return (
    <li className={S.card}>
      <div className={S.info}>
        <h4>{id}</h4>
        <h3>{theme}</h3>
        <h4>{date}</h4>
      </div>
      <div className={S.text}>
        <p>{text}</p>
      </div>
      <div className={S.icon}>
        <Icon type="arrow" />
      </div>
    </li>
  );
};

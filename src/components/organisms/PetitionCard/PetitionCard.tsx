import { useNavigate } from "react-router-dom";
import { Icon } from "../../atoms/Icon/Icon";
import S from "./PetitionCard.module.scss";
import { PetitionStats } from "../../molecules/PetitionStats/PetitionStats";

type PetitionCardProps = {
  id: number;
  text: string;
};
export const PetitionCard = ({ id, text }: PetitionCardProps) => {
  const navigate = useNavigate();
  const goToPetition = () => {
    navigate(`/tickets/${id}`);
  };
  return (
    <div onClick={goToPetition} className={S.card}>
      <PetitionStats id={id} />
      <div className={S.text}>
        <p>{text}</p>
      </div>
      <div className={S.icon}>
        <Icon type="arrow" />
      </div>
    </div>
  );
};

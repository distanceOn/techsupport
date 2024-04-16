import { useNavigate, useParams } from "react-router-dom";

export const useNav = (totalId?: number) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goToPetition = () => {
    navigate(`/tickets/${totalId}`);
  };

  return {
    id: Number(id),
    goToPetition,
  };
};

import { useNavigate, useParams } from "react-router-dom";

export const useNav = (totalId?: number) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const goToPetition = () => {
    navigate(`/tickets/${totalId}`);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToMain = () => {
    navigate("/");
  };

  return {
    id: Number(id),
    goToPetition,
    goToLogin,
    goToMain,
  };
};

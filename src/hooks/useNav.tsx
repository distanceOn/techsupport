import { useParams } from "react-router-dom";

export const useNav = () => {
  const { id } = useParams();

  return {
    id: Number(id),
  };
};

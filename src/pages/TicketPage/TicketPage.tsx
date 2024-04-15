import { useParams } from "react-router-dom";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";

export const PetitionPage = () => {
  const { id } = useParams();
  return <DefaultTemplate content={<div>{id}</div>} />;
};

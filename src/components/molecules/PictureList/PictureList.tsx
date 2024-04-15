import { useAppSelector } from "../../../app/reducers/reduxHooks";
import { Picture } from "../../atoms/Picture/Picture";

export const PictureList = ({
  id,
  pictures,
}: {
  id?: string;
  pictures?: string[];
}) => {
  const { petitions } = useAppSelector((state) => state.data);

  const totalPictures =
    id !== undefined
      ? petitions.find((petition) => petition.id === Number(id))?.images
      : pictures;

  return (
    <ul>
      {totalPictures ? (
        totalPictures.map((picture, index) => (
          <Picture src={picture} alt={"Фото " + { index }} />
        ))
      ) : (
        <p>Нет фото</p>
      )}
    </ul>
  );
};

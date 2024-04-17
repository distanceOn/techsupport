import { useAppSelector } from "../../../app/reducers/reduxHooks";
import { Picture } from "../../atoms/Picture/Picture";

import S from "./PictureList.module.scss";

export const PictureList = ({
  id,
  pictures,
}: {
  id?: number;
  pictures?: string[];
}) => {
  const { petitions } = useAppSelector((state) => state.data);

  const totalPictures =
    id !== undefined
      ? petitions.find((petition) => petition.id === id)?.images
      : pictures;

  return (
    <ul className={S.list}>
      {totalPictures ? (
        totalPictures.map((picture, index) => (
          <li key={index}>
            <Picture src={picture} alt={"Фото " + { index }} />
          </li>
        ))
      ) : (
        <p>Нет фото</p>
      )}
    </ul>
  );
};

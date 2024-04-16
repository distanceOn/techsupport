import { PetitionDefineType } from "../../../utils/types";
import { PetitionStats } from "../../molecules/PetitionStats/PetitionStats";
import { PictureList } from "../../molecules/PictureList/PictureList";

export const InfoPetition = ({ id }: PetitionDefineType) => {
  return (
    <div>
      <PetitionStats id={id} />
      <PictureList id={id} />
    </div>
  );
};

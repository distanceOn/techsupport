import { usePetition } from "../../../hooks/usePetition";
import { PetitionDefineType } from "../../../utils/types";
import { PetitionStats } from "../../molecules/PetitionStats/PetitionStats";
import { PictureList } from "../../molecules/PictureList/PictureList";

export const InfoPetition = ({ id }: PetitionDefineType) => {
  const { theme, finish, date } = usePetition({ id });

  return (
    <div>
      <PetitionStats id={id} date={date} finish={finish} theme={theme} />
      <PictureList id={id} />
    </div>
  );
};

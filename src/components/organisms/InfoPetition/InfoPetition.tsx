import { usePetition } from "../../../hooks/usePetition";
import { PetitionDefineType } from "../../../utils/types";
import { Text } from "../../atoms/Text/Text";
import { PetitionStats } from "../../molecules/PetitionStats/PetitionStats";
import { PictureList } from "../../molecules/PictureList/PictureList";

import S from "./InfoPetition.module.scss";

export const InfoPetition = ({ id }: PetitionDefineType) => {
  const { theme, finish, date, text } = usePetition({ id });

  return (
    <div className={S.info}>
      <PetitionStats id={id} date={date} finish={finish} theme={theme} />
      <div className={S.text}>
        <Text color="white" size="thin">
          {text}
        </Text>
      </div>

      <PictureList id={id} />
    </div>
  );
};

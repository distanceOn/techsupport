import { PictureList } from "../../molecules/PictureList/PictureList";

export const InfoPetition = ({ id }: { id: string | undefined }) => {
  return (
    <div>
      <div>
        <h4>{id}</h4>
        <h3>theme</h3>
        <h4>date</h4>
      </div>
      <PictureList id={id} />
    </div>
  );
};

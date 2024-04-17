import S from "./Picture.module.scss";

type PictureProps = { src: string; alt: string };

export const Picture = ({ src, alt }: PictureProps) => {
  return (
    <div className={S.picture}>
      <img src={src} alt={alt} />
    </div>
  );
};

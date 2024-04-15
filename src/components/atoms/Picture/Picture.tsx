import S from "./Picture.module.scss";

export const Picture = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className={S.picture}>
      <img src={src} alt={alt} />
    </div>
  );
};

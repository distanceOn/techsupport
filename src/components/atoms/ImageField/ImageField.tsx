import { ChangeEventHandler } from "react";

import S from "./ImageField.module.scss";

export const ImageField = ({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className={S.container}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={onChange}
        id="file"
        className={S.input}
      />
      <label htmlFor="file" className={S.label}>
        Загрузить изображение
      </label>
    </div>
  );
};

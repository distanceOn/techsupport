import { ChangeEventHandler } from "react";

export const ImageField = ({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return <input type="file" accept="image/*" multiple onChange={onChange} />;
};

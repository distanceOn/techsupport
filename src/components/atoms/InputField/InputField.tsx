import React from "react";
import S from "./InputField.module.scss";

type InputFieldProps = {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export const InputField = ({
  label,
  type,
  id,
  value,
  onChange,
  required = false,
}: InputFieldProps) => (
  <div className={S.input}>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

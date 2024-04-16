import S from "./InputField.module.scss";

type InputFieldProps = {
  placeholder?: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  required = false,
}: InputFieldProps) => (
  <input
    className={S.input}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
    required={required}
  />
);

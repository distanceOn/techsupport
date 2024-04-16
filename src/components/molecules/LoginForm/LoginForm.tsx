import { Btn } from "../../atoms/Btn/Btn";
import { InputField } from "../../atoms/InputField/InputField";
import { Title } from "../../atoms/Title/Title";
import S from "./LoginForm.module.scss";

interface LoginFormProps {
  username: string;
  password: string;
  handleChangeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  username,
  password,
  handleChangeUsername,
  handleChangePassword,
  onLoginSubmit,
}) => (
  <form className={S.form} onSubmit={onLoginSubmit}>
    <Title level={2} text="Авторизация" />
    <InputField
      label="Логин"
      type="text"
      id="login"
      value={username}
      onChange={handleChangeUsername}
      required
    />
    <InputField
      label="Пароль"
      type="password"
      id="password"
      value={password}
      onChange={handleChangePassword}
      required
    />
    <Btn text="Войти" type="submit" onClick={() => {}} />
  </form>
);

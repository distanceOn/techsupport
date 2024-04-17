import { Btn } from "../../atoms/Btn/Btn";
import { InputField } from "../../atoms/InputField/InputField";
import { Title } from "../../atoms/Title/Title";
import S from "./LoginForm.module.scss";
import { LoginFormProps } from "./types";

export const LoginForm = ({
  username,
  password,
  handleChangeUsername,
  handleChangePassword,
  onLoginSubmit,
}: LoginFormProps) => (
  <form className={S.form} onSubmit={onLoginSubmit}>
    <div className={S.title}>
      <Title color="white" size="small">
        Вход в аккаунт
      </Title>
    </div>

    <InputField
      placeholder="admin"
      type="text"
      value={username}
      onChange={handleChangeUsername}
      required
    />
    <InputField
      placeholder="*****"
      type="password"
      value={password}
      onChange={handleChangePassword}
      required
    />
    <Btn color="white" type="submit" onClick={() => {}}>
      Войти
    </Btn>
  </form>
);

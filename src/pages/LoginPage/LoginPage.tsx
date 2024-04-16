import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { useLogin } from "./useLogin";

import S from "./LoginPage.module.scss";
import { InputField } from "../../components/atoms/InputField/InputField";

export const LoginPage = () => {
  const {
    username,
    password,
    handleChangePassword,
    handleChangeUsername,
    handleLogin,
  } = useLogin();

  return (
    <DefaultTemplate
      content={
        <div className={S.container}>
          <form className={S.form} onSubmit={handleLogin}>
            <h2>Login</h2>
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
            <button type="submit" className={S.btn}>
              Login
            </button>
          </form>
        </div>
      }
    />
  );
};

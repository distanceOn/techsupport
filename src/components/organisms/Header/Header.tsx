import { useAppSelector } from "../../../app/reducers/reduxHooks";
import { useAuth } from "../../../hooks/useAuth";
import { useNav } from "../../../hooks/useNav";
import { Btn } from "../../atoms/Btn/Btn";
import { Logo } from "../../atoms/Logo/Logo";
import { HeaderList } from "../../molecules/HeaderList/HeaderList";

import S from "./Header.module.scss";
const links = [
  { to: "/", text: "Главная" },
  { to: "/tickets", text: "История" },
];

export const Header = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { goToLogin } = useNav();
  const { toLogOut } = useAuth();

  return (
    <header className={S.header}>
      <div className={S.logo}>
        <Logo />
      </div>
      {isAuth ? (
        <>
          <HeaderList elements={links} />{" "}
          <Btn color="grey" type="button" onClick={toLogOut}>
            Выход
          </Btn>
        </>
      ) : (
        <Btn color="grey" type="button" onClick={goToLogin}>
          Войти
        </Btn>
      )}
    </header>
  );
};

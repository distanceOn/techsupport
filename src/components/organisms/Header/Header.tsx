import { useAppSelector } from "../../../hooks/reduxHooks";
import { useAuth } from "../../../hooks/useAuth";
import { useNav } from "../../../hooks/useNav";
import { Btn } from "../../atoms/Btn/Btn";
import { Logo } from "../../atoms/Logo/Logo";
import { HeaderList } from "../../molecules/HeaderList/HeaderList";

import S from "./Header.module.scss";
import { links } from "./consts";

export const Header = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { goToLogin } = useNav();
  const { toLogOut } = useAuth();

  const headerContent = isAuth ? (
    <>
      <HeaderList elements={links} />
      <Btn color="grey" type="button" onClick={toLogOut}>
        Выход
      </Btn>
    </>
  ) : (
    <Btn color="grey" type="button" onClick={goToLogin}>
      Войти
    </Btn>
  );

  return (
    <header className={S.header}>
      <div className={S.logo}>
        <Logo />
      </div>
      {headerContent}
    </header>
  );
};

import { useAuth } from "../../../hooks/useAuth";
import { useModal } from "../../../hooks/useModal";
import { useNav } from "../../../hooks/useNav";
import { Btn } from "../../atoms/Btn/Btn";
import { Logo } from "../../atoms/Logo/Logo";
import { HeaderList } from "../../molecules/HeaderList/HeaderList";

import S from "./Header.module.scss";
import { useHeader } from "./useHeader";

export const Header = () => {
  const { links, isAuth, isMainPage } = useHeader();
  const { goToLogin } = useNav();
  const { openCreateModal } = useModal();
  const { toLogOut } = useAuth();

  return (
    <header className={S.header}>
      <div className={S.logo}>
        <Logo />
      </div>
      {isAuth && <HeaderList elements={links} />}

      {isMainPage && (
        <Btn type="button" text="Новое обращение" onClick={openCreateModal} />
      )}
      {isAuth ? (
        <Btn type="button" text="Выход" onClick={toLogOut} />
      ) : (
        <Btn type="button" text="Войти" onClick={goToLogin} />
      )}
    </header>
  );
};

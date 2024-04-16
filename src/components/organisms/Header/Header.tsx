import { useAuth } from "../../../hooks/useAuth";
import { useModal } from "../../../hooks/useModal";
import { useNav } from "../../../hooks/useNav";
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
        <div onClick={openCreateModal} className={S.logout}>
          Новое обращение
        </div>
      )}
      {isAuth ? (
        <div onClick={toLogOut} className={S.logout}>
          выход
        </div>
      ) : (
        <div onClick={goToLogin} className={S.logout}>
          войти
        </div>
      )}
    </header>
  );
};

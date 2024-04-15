import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../../atoms/Logo/Logo";
import { HeaderList } from "../../molecules/HeaderList/HeaderList";

import S from "./Header.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/reducers/reduxHooks";
import { openModal } from "../../../app/reducers/modalSlice";
import { logout } from "../../../app/reducers/authSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  const openCreateModal = () => {
    dispatch(openModal("create"));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  const { pathname } = useLocation();
  const isMainPage = pathname === "/";

  const elements = [
    { to: "/", text: "Главная" },
    { to: "/tickets", text: "История" },
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <header className={S.header}>
      <div className={S.logo}>
        <Logo />
      </div>
      {isAuth && <HeaderList elements={elements} />}

      {isMainPage && (
        <div onClick={openCreateModal} className={S.logout}>
          Новое обращение
        </div>
      )}
      {isAuth ? (
        <div onClick={handleLogout} className={S.logout}>
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

import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/reducers/reduxHooks";

const links = [
  { to: "/", text: "Главная" },
  { to: "/tickets", text: "История" },
];

export const useHeader = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  const { pathname } = useLocation();
  const isMainPage = pathname === "/";

  return {
    links,
    isAuth,
    isMainPage,
  };
};

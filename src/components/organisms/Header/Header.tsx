import { Logo } from "../../atoms/Logo/Logo";
import { HeaderList } from "../../molecules/HeaderList/HeaderList";

import S from "./Header.module.scss";

export const Header = () => {
  const elements = [
    { to: "/", text: "Главная" },
    { to: "/tickets", text: "История" },
  ];

  return (
    <header className={S.header}>
      <div className={S.logo}>
        <Logo />
      </div>
      <HeaderList elements={elements} />
      <div className={S.logout}>выход</div>
    </header>
  );
};

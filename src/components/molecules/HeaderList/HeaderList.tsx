import { HeaderLinkType } from "../../../utils/types";
import { HeaderLink } from "../../atoms/HeaderLink/HeaderLink";
import S from "./HeaderList.module.scss";

type HeaderListProps = {
  elements: HeaderLinkType[];
};
export const HeaderList = ({ elements }: HeaderListProps) => {
  return (
    <ul className={S.links}>
      {elements.map(({ to, text }, index) => (
        <li key={text + index}>
          <HeaderLink to={to} text={text} />
        </li>
      ))}
    </ul>
  );
};

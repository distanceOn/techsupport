import { Link } from "react-router-dom";

import S from "./HeaderLink.module.scss";
import { HeaderLinkType } from "../../../utils/types";

export const HeaderLink = ({ to, text }: HeaderLinkType) => {
  return (
    <li>
      <Link className={S.link} to={to}>
        {text}
      </Link>
    </li>
  );
};

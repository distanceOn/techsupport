import React from "react";
import { TitleProps } from "./types";
import { getTotalTitleClassName } from "./utils";
import { titleTagMap } from "./consts";

export const Title = ({ children, color, size }: TitleProps) => {
  const className = getTotalTitleClassName({ color, size });

  const Tag: React.ElementType = titleTagMap[size] || titleTagMap.default;

  return <Tag className={className}>{children}</Tag>;
};

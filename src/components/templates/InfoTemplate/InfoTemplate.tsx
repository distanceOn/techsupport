import { ReactNode } from "react";

export const InfoTemplate = ({
  info,
  chat,
}: {
  info: ReactNode;
  chat: ReactNode;
}) => {
  return (
    <section>
      <div>{info}</div>
      <div>{chat}</div>
    </section>
  );
};

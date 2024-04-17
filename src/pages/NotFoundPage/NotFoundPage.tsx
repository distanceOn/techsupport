import { DefaultTemplate } from "../../components/templates/DefaultTemplate/DefaultTemplate";
import { Title } from "../../components/atoms/Title/Title";
import { Btn } from "../../components/atoms/Btn/Btn";
import { useNav } from "../../hooks/useNav";

import S from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const { goToMain } = useNav();
  return (
    <DefaultTemplate
      children={
        <div className={S.container}>
          <Title size="large" color="white">
            404
          </Title>
          <Title color="white" size="default">
            Такой страницы нет
          </Title>
          <Btn onClick={goToMain} type="button" color="green">
            На главную
          </Btn>
        </div>
      }
    />
  );
};

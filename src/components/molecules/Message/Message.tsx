import { ChatMessage } from "../../../utils/types";
import { Text } from "../../atoms/Text/Text";
import { Title } from "../../atoms/Title/Title";

import S from "./Message.module.scss";

export const Message = ({ sender, message, timestamp }: ChatMessage) => {
  return (
    <div className={S.message}>
      <div className={S.title}>
        <Title color="black" size="small">
          {sender}
        </Title>
        <Text color="black" size="thin">
          {timestamp}
        </Text>
      </div>
      <div className={S.text}>
        <Text color="gold" size="default">
          {message}
        </Text>
      </div>
    </div>
  );
};

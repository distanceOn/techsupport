import { ChatMessage } from "../../../utils/types";
import { Text } from "../../atoms/Text/Text";
import { Title } from "../../atoms/Title/Title";

export const Message = ({ sender, message, timestamp }: ChatMessage) => {
  return (
    <div>
      <div>
        <Title color="white" size="min">
          {sender + ":"}
        </Title>
        <Text color="white" size="default">
          {message}
        </Text>
      </div>
      <div>
        <Text color="white" size="default">
          {timestamp}
        </Text>
      </div>
    </div>
  );
};

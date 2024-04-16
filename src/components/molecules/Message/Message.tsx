import { ChatMessage } from "../../../utils/types";
import { Text } from "../../atoms/Text/Text";
import { Title } from "../../atoms/Title/Title";

export const Message = ({ sender, message, timestamp }: ChatMessage) => {
  return (
    <div>
      <div>
        <Title text={sender + ":"} level={4} />
        <Text text={message} />
      </div>
      <div>
        <Text text={timestamp} />
      </div>
    </div>
  );
};

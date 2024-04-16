import { PetitionDefineType } from "../../../utils/types";
import { usePetition } from "../../../hooks/usePetition";
import { useChat } from "./useChat";
import { useModal } from "../../../hooks/useModal";
import { Btn } from "../../atoms/Btn/Btn";
import { Message } from "../../molecules/Message/Message";
import { Title } from "../../atoms/Title/Title";
import { InputField } from "../../atoms/InputField/InputField";

export const Chat = ({ id }: PetitionDefineType) => {
  const { openFinishPetitionModal } = useModal();
  const petition = usePetition({ id });
  const { message, handleTyping, handleSendMessage } = useChat({ id });

  return (
    <div>
      <div>
        <Btn color="grey" onClick={openFinishPetitionModal} type="button">
          Вопрос решен?
        </Btn>
        <Title size="min" color="white">
          {`Чат обращения ${id}`}
        </Title>
      </div>

      <ul>
        {petition?.chat?.map(({ sender, message, timestamp }, index) => (
          <li key={timestamp + index}>
            <Message message={message} sender={sender} timestamp={timestamp} />
          </li>
        ))}
      </ul>

      <div>
        <InputField
          label="Ваше сообщение"
          type="text"
          id="message"
          value={message}
          onChange={handleTyping}
          required
        />
        <Btn color="grey" onClick={handleSendMessage} type="button">
          Отправить
        </Btn>
      </div>
    </div>
  );
};

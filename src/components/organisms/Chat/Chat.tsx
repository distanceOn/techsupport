import { PetitionDefineType } from "../../../utils/types";
import { usePetition } from "../../../hooks/usePetition";
import { useChat } from "./useChat";
import { useModal } from "../../../hooks/useModal";

export const Chat = ({ id }: PetitionDefineType) => {
  const { openFinishPetitionModal } = useModal();
  const petition = usePetition({ id });
  const { message, handleTyping, handleSendMessage } = useChat({ id });

  return (
    <div>
      <div>
        <button onClick={openFinishPetitionModal}>вопрос решен?</button>
        <h4>Чат обращения {id}</h4>
      </div>

      <div>
        {petition?.chat?.map((msg, idx) => (
          <p key={idx}>
            <strong>{msg.sender}:</strong> {msg.message} <br />
            {msg.timestamp}
          </p>
        ))}
      </div>

      <div>
        <input value={message} onChange={handleTyping} type="text" />
        <button onClick={handleSendMessage}>отправить</button>
      </div>
    </div>
  );
};

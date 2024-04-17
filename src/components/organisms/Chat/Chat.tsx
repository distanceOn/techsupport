import { PetitionDefineType } from "../../../utils/types";
import { usePetition } from "../../../hooks/usePetition";
import { useChat } from "./useChat";
import { useModal } from "../../../hooks/useModal";
import { Btn } from "../../atoms/Btn/Btn";
import { Message } from "../../molecules/Message/Message";
import { Title } from "../../atoms/Title/Title";
import { InputField } from "../../atoms/InputField/InputField";

import S from "./Chat.module.scss";
import { useEffect, useRef } from "react";

export const Chat = ({ id }: PetitionDefineType) => {
  const { openFinishPetitionModal } = useModal();
  const petition = usePetition({ id });
  const { message, handleTyping, handleSendMessage } = useChat({ id });

  const scrollContainerRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [petition?.chat]);

  return (
    <div className={S.container}>
      <div className={S.head}>
        <Title size="min" color="white">
          {`Чат обращения #${id}`}
        </Title>
        {petition.finish ? (
          <Title color="white" size="small">
            Обращение закрыто
          </Title>
        ) : (
          <Btn color="green" onClick={openFinishPetitionModal} type="button">
            Вопрос решен?
          </Btn>
        )}
      </div>

      <ul ref={scrollContainerRef} className={S.chat}>
        {petition?.chat?.map(({ sender, message, timestamp }, index) => (
          <li key={timestamp + index}>
            <Message message={message} sender={sender} timestamp={timestamp} />
          </li>
        ))}
      </ul>
      {!petition.finish && (
        <div className={S.send}>
          <InputField
            placeholder="Сообщение..."
            type="text"
            value={message}
            onChange={handleTyping}
            required
            onEnter={handleSendMessage}
          />
          <Btn color="white" onClick={handleSendMessage} type="button">
            Отправить
          </Btn>
        </div>
      )}
    </div>
  );
};

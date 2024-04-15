import React, { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/reducers/reduxHooks";
import { addChatMessage } from "../../../app/reducers/dataSlice";
import { openModal } from "../../../app/reducers/modalSlice";

type ChatProps = {
  id: number;
};

export const Chat = ({ id }: ChatProps) => {
  const dispatch = useAppDispatch();
  const petition = useAppSelector((state) =>
    state.data.petitions.find((p) => p.id === id)
  );

  const [message, setMessage] = useState("");

  const handleTyping = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    dispatch(
      addChatMessage({
        id,
        message: {
          sender: "user2",
          message,
          timestamp: new Date().toLocaleDateString("ru-RU"),
        },
      })
    );
    setMessage("");
  };

  const openFinishPetition = () => {
    dispatch(openModal("finish"));
  };

  return (
    <div>
      <div>
        <button onClick={openFinishPetition}>вопрос решен?</button>
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
        <button onClick={handleSend}>отправить</button>
      </div>
    </div>
  );
};

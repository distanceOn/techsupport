import { useState } from "react";
import { addChatMessage } from "../../../app/reducers/dataSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { PetitionDefineType } from "../../../utils/types";
import { getTime } from "../../../utils/utils";
import { EventChangeInput } from "../../../utils/eventTypes";

export const useChat = ({ id }: PetitionDefineType) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const handleTyping = (event: EventChangeInput) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const totalMessage = message.trim();
    if (totalMessage.length === 0) return;

    dispatch(
      addChatMessage({
        id,
        message: {
          sender: "you",
          message,
          timestamp: getTime(),
        },
      })
    );
    setMessage("");
  };

  return {
    message,
    handleTyping,
    handleSendMessage,
  };
};

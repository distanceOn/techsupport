import { useState } from "react";
import { addChatMessage } from "../../../app/reducers/dataSlice";
import { useAppDispatch } from "../../../app/reducers/reduxHooks";
import { PetitionDefineType } from "../../../utils/types";
import { getTime } from "../../../utils/utils";

export const useChat = ({ id }: PetitionDefineType) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
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

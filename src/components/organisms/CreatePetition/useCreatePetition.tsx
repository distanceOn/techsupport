import { SetStateAction, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/reducers/reduxHooks";
import { addPetition } from "../../../app/reducers/dataSlice";
import { closeModal } from "../../../app/reducers/modalSlice";

export const useCreatePetition = () => {
  const { petitions } = useAppSelector((state) => state.data);

  const dispatch = useAppDispatch();
  const [selectedTopic, setSelectedTopic] = useState("default");
  const [customTopic, setCustomTopic] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSelectChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setSelectedTopic(value);
    if (value !== "другое") {
      setCustomTopic("");
      setError("");
    } else if (!customTopic) {
      setError("Пожалуйста, введите тему.");
    }
  };

  const handleCustomTopicChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCustomTopic(event.target.value);
    setError("");
  };

  const handleSetText = (event: { target: { value: any } }) => {
    setText(event.target.value);
    setError("");
  };

  const handleCreatePetition = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (
      !selectedTopic ||
      selectedTopic === "default" ||
      !text ||
      (selectedTopic === "другое" && !customTopic)
    ) {
      setError("Все поля должны быть заполнены.");
      return;
    }

    const totalPetition = {
      theme: customTopic || selectedTopic,
      id: petitions.length + 1,
      date: new Date().toLocaleDateString("ru-RU"),
      text: text,
      images: [],
      finish: false,
    };
    dispatch(addPetition(totalPetition));
    dispatch(closeModal());
    setText("");
    setCustomTopic("");
    setSelectedTopic("default");
    setError("");
  };
  return {
    selectedTopic,
    handleCustomTopicChange,
    handleSelectChange,
    customTopic,
    text,
    handleSetText,
    handleCreatePetition,
    error,
  };
};
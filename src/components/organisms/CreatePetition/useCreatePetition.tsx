import { ChangeEvent, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { useData } from "../../../hooks/useData";
import { EventChangeInput, EventForm } from "../../../utils/eventTypes";
import { handleUploadImages } from "./utils";

export const useCreatePetition = () => {
  const { createNewPetition } = useData();
  const { toCloseModal } = useModal();

  const [selectedTopic, setSelectedTopic] = useState("default");
  const [customTopic, setCustomTopic] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const updatedImages = handleUploadImages(event, images);
      setImages(updatedImages);
    }
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSelectedTopic(value);
    if (value !== "other") {
      setCustomTopic("");
      setError("");
    } else if (!customTopic) {
      setError("Пожалуйста, введите тему.");
    }
  };

  const handleCustomTopicChange = (event: EventChangeInput) => {
    setCustomTopic(event.target.value);
    setError("");
  };

  const handleSetText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setError("");
  };

  const handleCreatePetition = (event: EventForm) => {
    event.preventDefault();

    const noFields =
      !selectedTopic ||
      selectedTopic === "default" ||
      !text ||
      (selectedTopic === "other" && !customTopic);

    if (noFields) {
      setError("Все поля должны быть заполнены.");
      return;
    }

    const totalPetition = {
      theme: customTopic || selectedTopic,
      text: text,
      images,
    };

    createNewPetition(totalPetition);
    toCloseModal();
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
    handleImageChange,
    images,
  };
};

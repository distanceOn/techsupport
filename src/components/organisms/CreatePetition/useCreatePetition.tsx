import { SetStateAction, useState } from "react";

export const useCreatePetition = () => {
  const [selectedTopic, setSelectedTopic] = useState("default");
  const [customTopic, setCustomTopic] = useState("");

  const handleSelectChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setSelectedTopic(value);
    if (value !== "другое") {
      setCustomTopic("");
    }
  };

  const handleCustomTopicChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCustomTopic(event.target.value);
  };

  return {
    selectedTopic,
    handleCustomTopicChange,
    handleSelectChange,
    customTopic,
  };
};

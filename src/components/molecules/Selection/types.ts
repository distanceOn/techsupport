import { EventChangeInput, EventChangeSelect } from "../../../utils/eventTypes";

export type SelectionProps = {
  selectedTopic: string;
  handleChange: (event: EventChangeSelect) => void;
  customTopic: string;
  handleCustomTopicChange: (event: EventChangeInput) => void;
};

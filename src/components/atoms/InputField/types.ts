import { EventChangeInput } from "../../../utils/eventTypes";

export type InputFieldProps = {
  placeholder?: string;
  type: string;
  value: string;
  onChange: (event: EventChangeInput) => void;
  onEnter?: () => void;
  required?: boolean;
};

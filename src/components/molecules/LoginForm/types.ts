import { EventChangeInput, EventForm } from "../../../utils/eventTypes";

export type LoginFormProps = {
  username: string;
  password: string;
  handleChangeUsername: (event: EventChangeInput) => void;
  handleChangePassword: (event: EventChangeInput) => void;
  onLoginSubmit: (event: EventForm) => void;
};

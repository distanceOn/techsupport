import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChatMessage, Petition } from "../../utils/types";
import { getTime } from "../../utils/utils";
import { mockPetitions } from "../../utils/consts";

type DataSlice = {
  petitions: Petition[];
};

const initialState: DataSlice = {
  petitions: mockPetitions,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addPetition: (state, { payload }) => {
      const newPetition = {
        ...payload,
        date: getTime(),
        id: state.petitions.length + 1,
        finish: false,
        chat: [],
      };
      state.petitions = [...state.petitions, newPetition];
    },
    toFinishPetition: (state, { payload }) => {
      const petition = state.petitions.find((p) => p.id === payload);
      if (petition) {
        petition.finish = true;
      }
    },
    addChatMessage: (
      state,
      action: PayloadAction<{ id: number; message: ChatMessage }>
    ) => {
      const petition = state.petitions.find((p) => p.id === action.payload.id);
      if (petition) {
        petition.chat.push(action.payload.message);
      }
    },
  },
});

export const { addPetition, addChatMessage, toFinishPetition } =
  dataSlice.actions;

export const dataReducer = dataSlice.reducer;

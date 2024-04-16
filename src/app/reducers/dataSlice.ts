import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChatMessage, Petition } from "../../utils/types";

type DataSlice = {
  petitions: Petition[];
};

const initialState: DataSlice = {
  petitions: [
    {
      theme: "Спорт",
      id: 1,
      date: "22.02.2024",
      text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
      images: [
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      ],
      finish: true,
      chat: [
        {
          sender: "user",
          message: "How do we resolve this?",
          timestamp: "10:00 AM",
        },
      ],
    },
    {
      theme: "Спорт",
      id: 2,
      date: "22.02.2024",
      text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
      images: [
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      ],
      finish: false,
      chat: [
        {
          sender: "user",
          message: "How do we resolve this?",
          timestamp: "10:00 AM",
        },
      ],
    },
    {
      theme: "Спорт",
      id: 3,
      date: "22.02.2024",
      text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
      images: [
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      ],
      finish: false,
      chat: [
        {
          sender: "user",
          message: "How do we resolve this?",
          timestamp: "10:00 AM",
        },
      ],
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addPetition: (state, { payload }) => {
      const newPetition = {
        ...payload,
        date: new Date().toLocaleDateString("ru-RU"),
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

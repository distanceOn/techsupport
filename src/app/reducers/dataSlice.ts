import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ChatMessage = {
  sender: string;
  message: string;
  timestamp: string;
};

type Petition = {
  theme: string;
  id: number;
  date: string;
  text: string;
  images: string[];
  finish: boolean;
  chat: ChatMessage[];
};

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
      state.petitions = [...state.petitions, payload];
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

export const { addPetition, addChatMessage } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;

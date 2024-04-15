import { createSlice } from "@reduxjs/toolkit";

type Petition = {
  theme: string;
  id: number;
  date: string;
  text: string;
  images: string[];
  finish: boolean;
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
  },
});

export const { addPetition } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;

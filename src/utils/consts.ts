import { Petition } from "./types";

export const mockPetitions: Petition[] = [
  {
    theme: "Спорт",
    id: 1,
    date: "13.04 13:14",
    text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
    images: [
      "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
    ],
    finish: true,
    chat: [
      {
        sender: "Администратор",
        message: "Помогу решить вашу проблему!",
        timestamp: "13.04 15:34",
      },
    ],
  },
  {
    theme: "Спорт",
    id: 2,
    date: "15.04 15:14",
    text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
    images: [
      "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
    ],
    finish: false,
    chat: [
      {
        sender: "Администратор",
        message: "Помогу решить вашу проблему, расскажите поподробнее!",
        timestamp: "15.04 16:35",
      },
    ],
  },
  {
    theme: "Спорт",
    id: 3,
    date: "16.04 17:30",
    text: "dnasbdkjdsbfjkljqwebhbwfdsklfdqwjehiuqwiejfdsnfhbewhkqwenjdsbfiqwjeqwnfidf",
    images: [
      "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
    ],
    finish: false,
    chat: [
      {
        sender: "Администратор",
        message: "Помогу решить вашу проблему, поделитесь подробностями!",
        timestamp: "16.04 18:32",
      },
    ],
  },
];

import { Petition } from "./types";

export const mockPetitions: Petition[] = [
  {
    theme: "CarX Drift",
    id: 1,
    date: "13.04 13:14",
    text: "Здравствуйте, я недавно начал играть в вашу мобильную игру CarX Drift на моем новом смартфоне, и столкнулся с проблемой падения кадров в секунду (FPS) и периодическими зависаниями во время гонок. Это происходит особенно часто на трассах с высокой детализацией. Можете ли вы помочь мне настроить графические параметры или предложить обновление, которое улучшит производительность? Благодарю за вашу помощь!",
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
    theme: "CarX Store",
    id: 2,
    date: "15.04 15:14",
    text: "Добрый день! Я пытался приобрести новый пакет улучшений для моего автомобиля в CarX Store через ваш сайт, но транзакция не проходит, хотя банковские средства достаточны. При попытке покупки выскакивает сообщение об ошибке, и деньги возвращаются обратно на мой счет.",
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
    theme: "Xlab",
    id: 3,
    date: "16.04 17:30",
    text: "Приветствую! Я заинтересован в возможности обучения в вашей школе разработчиков Xlab, так как планирую карьеру разработчика игр. Могли бы вы предоставить более подробную информацию о курсах, особенно интересуют специализации по программированию игровых движков и созданию графики для мобильных платформ. Также хотелось бы узнать о стоимости и возможностях финансирования обучения.",
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

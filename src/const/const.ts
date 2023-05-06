export enum AppRoute {
  Main = '/',
  Quest = 'quest/:id',
  Contacts = 'contacts',
  Login = 'login',
  Booking = 'booking',
  MyQuests = 'my-quests',
}

export enum NameSpace {
  Data = 'Data',
  Main = 'Main',
  User = 'User',
}

export const topics = ['all', 'adventure', 'horror', 'mystic', 'detective', 'sciFi'];

export const difficulties = ['any', 'easy', 'middle', 'hard'];

export const topicsRus = ['Все квесты', 'Приключения', 'Ужасы', 'Мистика', 'Детектив', 'Sci-fi'];

export const difficultiesRus = ['Любой', 'Лёгкий', 'Средний', 'Сложный'];

export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';

export const REQUEST_TIMEOUT = 5000;

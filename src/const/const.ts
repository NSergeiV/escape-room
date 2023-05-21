
export enum AppRoute {
  Main = 'https://nsergeiv.github.io/escape-room/',
  Quest = '/quest/:id',
  Contacts = '/contacts',
  Login = '/login',
  Booking = '/quest/:id/booking',
  MyQuests = '/my-quests',
}

export enum APIRoute {
  Quest = '/quest',
  Login = '/login',
  Logout = '/logout',
  Reservation = '/reservation',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export enum IconMarker {
  Default = '/img/svg/pin-default.svg',
  Current = '/img/svg/pin-active.svg',
}

export type ResponseAuthorization = {
  email: string;
  token: string;
}

export type AuthData = {
  email: string;
  password: string;
};

export enum NameSpace {
  Data = 'Data',
  Main = 'Main',
  User = 'User',
}

export const topic: { [key: string]: string } = {
  all: 'Все квесты',
  adventure: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  'sci-fi': 'Sci-fi',
};

export const complexity: { [key: string]: string } = {
  any: 'Любой',
  easy: 'Лёгкий',
  medium: 'Средний',
  hard: 'Сложный',
};

export const topics = ['all', 'adventure', 'horror', 'mystic', 'detective', 'sci-fi'];

export const difficulties = ['any', 'easy', 'medium', 'hard'];

export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';

export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 5000;

export const ZOOM_MAP_ORGANIZATION = 15;

export const COORDINATES_ORGANIZATION = [59.969718, 30.307523];

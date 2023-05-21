import { AuthorizationStatus, ResponseAuthorization } from '../const/const';

export type DataProcess = {
  quests: QuestData[];
  isQuestsDataLoading: boolean;
  error: string | null;
  questActive: QuestDataActive | null;
  isQuestDataLoading: boolean;
  location: string;
  questFilter: QuestData[];
  isQuestsReservationLoading: boolean;
  questsReservation: QuestsReservation;
  isQuestForBookingLoading: boolean;
  questsForBooking: QuestsForBooking;
  idMarkerBooking: string | null;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userAuthorization: ResponseAuthorization;
}

export type Quests = QuestData[];

type QuestData = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: [number];
};

export type QuestDataActive = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

export type QuestId = {
  arg: string;
}

export type QuestsReservation = QuestReservation[];

export type QuestReservation = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  quest: {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: string;
    type: string;
    peopleMinMax: number[];
  };
}

export type QuestsForBooking = QuestForBooking[];

type QuestForBooking = {
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  slots: {
    today: [{
      time: string;
      isAvailable: boolean;
    }];
    tomorrow: [{
      time: string;
      isAvailable: boolean;
    }];
  };
}

export type BookingData = {
  questIdActive: string;
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

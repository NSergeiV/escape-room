import { NameSpace } from '../../const/const';
import { State } from '../../types/state';
import { QuestDataActive, Quests, QuestsForBooking, QuestsReservation } from '../../types/types-api';

export const getQuests = (state: State): Quests => state[NameSpace.Data].quests;
export const getIsQuestsDataLoading = (state: State): boolean => state[NameSpace.Data].isQuestsDataLoading;
export const getError = (state: State): string | null => state[NameSpace.Data].error;
export const getQuestActive = (state: State): QuestDataActive | null => state[NameSpace.Data].questActive;
export const getLocation = (state: State): string => state[NameSpace.Data].location;
export const getQuestFilter = (state: State): Quests => state[NameSpace.Data].questFilter;
export const getIsQuestDataLoading = (state: State): boolean => state[NameSpace.Data].isQuestDataLoading;
export const getIsQuestsReservationLoading = (state: State): boolean => state[NameSpace.Data].isQuestsReservationLoading;
export const getQuestsReservation = (state: State): QuestsReservation => state[NameSpace.Data].questsReservation;
export const getIsQuestForBookingLoading = (state: State): boolean => state[NameSpace.Data].isQuestForBookingLoading;
export const getQuestsForBooking = (state: State): QuestsForBooking => state[NameSpace.Data].questsForBooking;
export const getIdMarkerBooking = (state: State): string | null => state[NameSpace.Data].idMarkerBooking;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { BookingData, QuestDataActive, QuestReservation, Quests, QuestsForBooking, QuestsReservation } from '../types/types-api';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AuthData, ResponseAuthorization } from '../const/const';
import { dropToken, saveToken } from '../services/token';

export const fetchQuestsAction = createAsyncThunk<Quests, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchQuests',
  async (_, { extra: api }) => {

    const { data } = await api.get<Quests>(APIRoute.Quest);

    return data;
  },
);

export const fetchQuestAction = createAsyncThunk<QuestDataActive, string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchQuest',
  async (arg, { extra: api }) => {
    const { data } = await api.get<QuestDataActive>(`/quest/${String(arg)}`);
    return data;
  }
);

export const fetchQuestsReservation = createAsyncThunk<QuestsReservation, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchQuestsReservation',
  async (_, { extra: api }) => {
    const { data } = await api.get<QuestsReservation>(APIRoute.Reservation);
    return data;
  }
);

export const fetchQuestForBooking = createAsyncThunk<QuestsForBooking, string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchQuestForBooking',
  async (arg, { extra: api }) => {
    const { data } = await api.get<QuestsForBooking>(`${arg}`);
    return data;
  }
);

export const bookingAction = createAsyncThunk<QuestReservation, BookingData, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/bookingAction',
  async ({ questIdActive, placeId, date, time, contactPerson, phone, withChildren, peopleCount }, { extra: api }) => {
    const { data } = await api.post<QuestReservation>(`quest/${questIdActive}/booking`, { placeId, date, time, contactPerson, phone, withChildren, peopleCount });
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<ResponseAuthorization, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'user/checkAuth',
  async (_, { extra: api }) => {
    const { data } = await api.get<ResponseAuthorization>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<ResponseAuthorization, AuthData, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<ResponseAuthorization>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'user/logout',
  async (_, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

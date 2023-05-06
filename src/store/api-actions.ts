import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { Quests } from '../types/types-api';
import { AppDispatch, State } from '../types/state';

export const fetchQuestsAction = createAsyncThunk<Quests, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchQuests',
  async (_, { extra: api }) => {

    const { data } = await api.get<Quests>('quest');

    return data;
  },
);

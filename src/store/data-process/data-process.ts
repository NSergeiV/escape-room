import { createSlice } from '@reduxjs/toolkit';

import { DataProcess } from '../../types/types-api';
import { fetchQuestsAction } from '../api-actions';
import { NameSpace } from '../../const/const';

const initialState: DataProcess = {
  quests: [],
  isQuestsDataLoading: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isQuestsDataLoading = false;
      });
  },
});

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { DataProcess, Quests } from '../../types/types-api';
import { bookingAction, fetchQuestAction, fetchQuestForBooking, fetchQuestsAction, fetchQuestsReservation } from '../api-actions';
import { NameSpace } from '../../const/const';

const sortQuests = (quests: Quests, type: string, level: string): Quests => {
  if (type === 'all') {

    return quests.filter((item) => item.level === level).slice();
  }

  if (level === 'any') {

    return quests.filter((item) => item.type === type).slice();
  }

  return quests.filter((item) => item.level === level && item.type === type).slice();
};

const initialState: DataProcess = {
  quests: [],
  isQuestsDataLoading: false,
  error: null,
  questActive: null,
  isQuestDataLoading: false,
  location: '/',
  questFilter: [],
  isQuestsReservationLoading: false,
  questsReservation: [],
  isQuestForBookingLoading: false,
  questsForBooking: [],
  idMarkerBooking: null,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearErrorAction: (state) => {
      state.error = null;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    filterQuest: (state, action: PayloadAction<{ type: string; level: string }>) => {
      const option = action.payload;
      const { type, level } = option;
      if (type === 'all' && level === 'any') {
        state.questFilter = state.quests;
      } else {
        state.questFilter = sortQuests(state.quests, type, level);
      }
    },
    setIdMarkerBooking: (state, action: PayloadAction<string>) => {
      state.idMarkerBooking = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.questFilter = state.quests;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.isQuestDataLoading = true;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.questActive = action.payload;
        state.isQuestDataLoading = false;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.isQuestDataLoading = false;
      })
      .addCase(fetchQuestsReservation.pending, (state) => {
        state.isQuestsReservationLoading = true;
      })
      .addCase(fetchQuestsReservation.fulfilled, (state, action) => {
        state.questsReservation = action.payload;
        state.isQuestsReservationLoading = false;
      })
      .addCase(fetchQuestsReservation.rejected, (state) => {
        state.isQuestsReservationLoading = false;
      })
      .addCase(fetchQuestForBooking.pending, (state) => {
        state.isQuestForBookingLoading = true;
      })
      .addCase(fetchQuestForBooking.fulfilled, (state, action) => {
        const questsOneTopic = action.payload;
        state.questsForBooking = questsOneTopic;
        state.idMarkerBooking = questsOneTopic[0].id;
        state.isQuestForBookingLoading = false;
      })
      .addCase(fetchQuestForBooking.rejected, (state) => {
        state.isQuestForBookingLoading = false;
      })
      .addCase(bookingAction.fulfilled, (state, action) => {
        const questsOneTopic = action.payload;
        state.questsReservation.push(questsOneTopic);
      });
  }
});

export const { setError, clearErrorAction, setLocation, filterQuest, setIdMarkerBooking } = dataProcess.actions;

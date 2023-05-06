import { NameSpace } from '../../const/const';
import { State } from '../../types/state';
import { Quests } from '../../types/types-api';

export const getQuests = (state: State): Quests => state[NameSpace.Data].quests;
export const getIsQuestsDataLoading = (state: State): boolean => state[NameSpace.Data].isQuestsDataLoading;

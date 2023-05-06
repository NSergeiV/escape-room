export type DataProcess = {
  quests: QuestData[];
  isQuestsDataLoading: boolean;
};

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

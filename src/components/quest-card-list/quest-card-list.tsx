import { QuestsProps } from '../../types/types-props';

import QuestCard from '../quest-card/quest-card';

function QuestCardList({ quests }: QuestsProps): JSX.Element {

  return (
    <div className="cards-grid">
      {quests.map((item) => <QuestCard key={item.id} cardData={item} />)}
    </div>
  );
}

export default QuestCardList;

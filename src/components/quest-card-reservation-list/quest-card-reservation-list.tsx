import { QuestsReservationProps } from '../../types/types-props';

import QuestCardReservation from '../quest-card-reservation/quest-card-reservation';

function QuestCardReservationList({ questsReservation }: QuestsReservationProps) {
  return (
    <div className="cards-grid">
      {questsReservation.map((item) => <QuestCardReservation key={item.id} cardDataReservation={item} />)}
    </div>
  );
}

export default QuestCardReservationList;

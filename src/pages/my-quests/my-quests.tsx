import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getIsQuestsReservationLoading, getQuestsReservation } from '../../store/data-process/selectors';
import { setLocation } from '../../store/data-process/data-process';
import { fetchQuestsReservation } from '../../store/api-actions';

import LoadingScreen from '../../components/loading-screen/loading-screen';
import QuestCardReservationList from '../../components/quest-card-reservation-list/quest-card-reservation-list';

function MyQuests(): JSX.Element {

  const isQuestsReservationLoading = useAppSelector(getIsQuestsReservationLoading);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchQuestsReservation());
      dispatch(setLocation(pathname));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, pathname]);

  const questsReservation = useAppSelector(getQuestsReservation);

  if (isQuestsReservationLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
          <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
        </div>
        <QuestCardReservationList questsReservation={questsReservation} />
      </div>
    </main>
  );
}

export default MyQuests;

import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getIdMarkerBooking, getIsQuestForBookingLoading, getQuestActive, getQuestsForBooking } from '../../store/data-process/selectors';
import { setLocation } from '../../store/data-process/data-process';
import { fetchQuestForBooking } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';

import LoadingScreen from '../../components/loading-screen/loading-screen';
import MapQuests from '../../components/map-quests/map-quests';
import FormBooking from '../../components/form-booking/form-booking';

function Booking(): JSX.Element {

  const dispatch = useAppDispatch();
  const { pathname } = useLocation() as { pathname: string };
  const isQuestForBookingLoading = useAppSelector(getIsQuestForBookingLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchQuestForBooking(pathname));
      dispatch(setLocation(pathname));
    }
    return () => { isMounted = false; };
  }, [dispatch, pathname]);

  const listQuestsBooking = useAppSelector(getQuestsForBooking);
  const markerIdChoice = useAppSelector(getIdMarkerBooking);
  const questAction = useAppSelector(getQuestActive);

  if (isQuestForBookingLoading) {
    return <LoadingScreen />;
  }

  if (listQuestsBooking.length === 0) {
    return <div>NOT QUEST</div>;
  }

  if (!questAction) {
    return <div>NO ACTION</div>;
  }


  const booking = listQuestsBooking.filter((quest) => quest.id === markerIdChoice)[0];
  const { location, slots } = booking;
  const { title, coverImg, coverImgWebp, previewImg, previewImgWebp, peopleMinMax, id } = questAction;

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <main className="page-content decorated-page">
      <Helmet>
        <title>Бронирование квеста - Escape Room</title>
      </Helmet>
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${coverImgWebp} 2x`} />
          <img src={previewImg} srcSet={`${coverImg} 2x`} width="1366" height="1959" alt="" />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста</h1>
          <p className="title title--size-m title--uppercase page-content__title">{title}</p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <div className="map__container">
                <MapQuests listQuestsBookingMap={listQuestsBooking} />
              </div>
            </div>
            <p className="booking-map__address">Вы&nbsp;выбрали: {location.address}</p>
          </div>
        </div>
        <FormBooking slotsTime={slots} peopleMinMax={peopleMinMax} questId={id} />
      </div>
    </main >
  );
}

export default Booking;

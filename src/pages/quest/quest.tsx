import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { fetchQuestAction } from '../../store/api-actions';
import { getIsQuestDataLoading, getQuestActive } from '../../store/data-process/selectors';
import { AppRoute, AuthorizationStatus, complexity, topic } from '../../const/const';
import { setLocation } from '../../store/data-process/data-process';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

import LoadingScreen from '../../components/loading-screen/loading-screen';

function Quest(): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const { pathname } = useLocation();
  const pathnameBooking = `${pathname}/booking`;
  const questId = id;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isQuestDataLoading = useAppSelector(getIsQuestDataLoading);

  useEffect(() => {

    let isMounted = true;

    if (isMounted) {
      dispatch(fetchQuestAction(questId));
      dispatch(setLocation(pathnameBooking));
    }
    return () => { isMounted = false; };
  }, [dispatch, pathname, pathnameBooking, questId]);

  const questAction = useAppSelector(getQuestActive);

  if (isQuestDataLoading) {
    return <LoadingScreen />;
  }


  if (!questAction) {
    return <div>Not Found Page</div>;
  }

  const { title, description, type, level, peopleMinMax, previewImgWebp, coverImgWebp, previewImg, coverImg } = questAction;

  return (
    <main className="decorated-page quest-page">
      <Helmet>
        <title>Квест - Escape Room</title>
      </Helmet>
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${coverImgWebp} 2x`} />
          <img src={previewImg} srcSet={`${coverImg} 2x`} width="1366" height="768" alt="Кадр" />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>{topic[type]}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>{peopleMinMax[0]}&ndash;{peopleMinMax[1]}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>{complexity[level]}
            </li>
          </ul>
          <p className="quest-page__description">{description}</p>
          <Link to={authorizationStatus !== AuthorizationStatus.Auth ? AppRoute.Login : pathnameBooking} className="btn btn--accent btn--cta quest-page__btn">Забронировать</Link>
        </div>
      </div>
    </main>
  );
}

export default Quest;

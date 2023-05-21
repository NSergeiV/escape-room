import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getIsQuestsDataLoading, getQuestFilter } from '../../store/data-process/selectors';
import { setLocation } from '../../store/data-process/data-process';

import MainForm from '../../components/main-form/main-form';
import QuestCardList from '../../components/quest-card-list/quest-card-list';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function Main(): JSX.Element {

  const isQuestsDataLoading = useAppSelector(getIsQuestsDataLoading);

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(setLocation(pathname));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, pathname]);

  const quests = useAppSelector(getQuestFilter);

  if (isQuestsDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="page-content">
      <Helmet>
        <title>Escape Room</title>
      </Helmet>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге</h1>
          <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
        </div>
        <div className="page-content__item">
          <MainForm />
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <QuestCardList quests={quests} />
      </div>
    </main>
  );
}

export default Main;

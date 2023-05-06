import { Helmet } from 'react-helmet-async';

import CardsGrid from '../../components/cards-grid/cards-grid';
import MainForm from '../../components/main-form/main-form';

function Main(): JSX.Element {
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
        <CardsGrid />
      </div>
    </main>
  );
}

export default Main;

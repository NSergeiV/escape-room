import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from '../../const/const';

import Main from '../../pages/main/main';
import Layout from '../layout/layout';
import Error from '../../pages/errors/error';
import browserHistory from '../../browser-history/browser-history';
import HistoryRouter from '../history-route/history-route';
import Quest from '../../pages/quest/quest';
import Contacts from '../../pages/organization-contacts/organization-contacts';
import PrivateRoute from '../privet-route/privet-route';
import MyQuests from '../../pages/my-quests/my-quests';
import Booking from '../../pages/booking/booking';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />} >
            <Route
              index
              element={<Main />}
            />
            <Route
              path={AppRoute.Quest}
              element={<Quest />}
            />
            <Route
              path={AppRoute.Contacts}
              element={<Contacts />}
            />
            <Route
              path={AppRoute.Login}
              element={<PrivateRoute />}
            />
            <Route
              path={AppRoute.MyQuests}
              element={<MyQuests />}
            />
            <Route
              path={AppRoute.Booking}
              element={<Booking />}
            />
          </Route>
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;

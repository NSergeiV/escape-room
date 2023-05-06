import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from '../../const/const';

import Main from '../../pages/main/main';
import Layout from '../layout/layout';
import Error from '../../pages/errors/error';
import browserHistory from '../../browser-history/browser-history';
import HistoryRouter from '../history-route/history-route';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />} >
            <Route
              index
              element={<Main />}
            />
          </Route>
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
        {/* </BrowserRouter> */}
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;

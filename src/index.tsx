import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store/store';
import { fetchQuestsAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchQuestsAction());

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

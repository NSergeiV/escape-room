import { TIMEOUT_SHOW_ERROR } from '../const/const';
import { clearErrorAction, setError } from '../store/data-process/data-process';
import { store } from '../store/store';

export const processErrorHandle = (massage: string): void => {
  store.dispatch(setError(massage));

  setTimeout(
    () => store.dispatch(clearErrorAction()),
    TIMEOUT_SHOW_ERROR,
  );
};

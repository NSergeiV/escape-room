import { Link } from 'react-router-dom';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getLocation } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { logoutAction } from '../../store/api-actions';

function Header(): JSX.Element {

  const dispatch = useAppDispatch();
  const location = useAppSelector(getLocation);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleClickSignOut = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container container--size-l">
        {location.length === 1 ?
          <span className="logo header__logo">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </span>
          :
          <Link to={'/'} className="logo" aria-label="Перейти на Главную">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </Link>}
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link
                to={AppRoute.Main}
                className={cn(
                  'link',
                  { 'active': location === '/' }
                )}
              >Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link
                to={AppRoute.Contacts}
                className={cn(
                  'link',
                  { 'active': location === '/contacts' }
                )}
              >Контакты
              </Link>
            </li>
            <li className="main-nav__item">
              {authorizationStatus === AuthorizationStatus.Auth
                ?
                <Link
                  to={AppRoute.MyQuests}
                  className={cn(
                    'link',
                    { 'active': location === '/my-quests' }
                  )}
                >Мои бронирования
                </Link>
                :
                null}
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          {authorizationStatus === AuthorizationStatus.Auth ? <a onClick={handleClickSignOut} className="btn btn--accent header__side-item" href="#!">Выйти</a> : <Link to={AppRoute.Login} className="btn header__side-item header__login-btn">Вход</Link>}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

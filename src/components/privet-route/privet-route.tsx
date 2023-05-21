import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const/const';
import { useAppSelector } from '../../hooks/hook';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import Login from '../../pages/login/login';
import { getLocation } from '../../store/data-process/selectors';

function PrivateRoute(): JSX.Element {

  const addressPage = useAppSelector(getLocation);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={addressPage} />;
  }

  return <Login />;
}

export default PrivateRoute;

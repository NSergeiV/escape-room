import './error-message.css';

import { useAppSelector } from '../../hooks/hook';
import { getError } from '../../store/data-process/selectors';

function ErrorMessage(): JSX.Element | null {

  const error = useAppSelector(getError);

  return (error) ? <div className='error-message'>{error}</div> : null;
}

export default ErrorMessage;

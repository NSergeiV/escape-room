import { useForm, SubmitHandler } from 'react-hook-form';

import { IFormInput } from '../../types/type-interface';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/hook';

function FormLogin() {

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
    },
  } = useForm<IFormInput>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    const { userEmail, userPassword } = data;

    dispatch(loginAction({ email: userEmail, password: userPassword }));
  };

  return (
    <div className="login__form">
      <form onSubmit={(event) => void handleSubmit(onSubmit)(event)} className="login-form">
        <div className="login-form__inner-wrapper">
          <h1 className="title title--size-s login-form__title">Вход</h1>
          <div className="login-form__inputs">

            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
              <input
                type="email"
                {...register('userEmail', {
                  required: 'Укажите адрес почты',
                  pattern: {
                    value: /^[_a-z0-9-\\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
                    message: 'Введите корректрый Email',
                  }
                })}
                placeholder="Адрес электронной почты"
                aria-invalid={errors.userEmail ? 'true' : 'false'}
              />
              {errors.userEmail && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">{errors.userEmail?.message}</span>}
            </div>

            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="password">Пароль</label>
              <input
                type="password"
                {...register('userPassword', {
                  required: 'Укажите пароль',
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])/gi,
                    message: 'Минимум одна буква и одна цифра или у Вас русская раскладка',
                  },
                })}
                placeholder="Пароль"
                aria-invalid={errors.userPassword ? 'true' : 'false'}
              />
              {errors.userPassword && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">{errors.userPassword?.message}</span>}
            </div>

          </div>

          <button className="btn btn--accent btn--general login-form__submit" type="submit" disabled={!isValid}>Войти</button>

        </div>
        <label className="custom-checkbox login-form__checkbox">
          <input
            type="checkbox"
            {...register('userCheck', {
              required: 'Вы не дали согласие',
            })}
            aria-invalid={errors.userCheck ? 'true' : 'false'}
          />
          <span className="custom-checkbox__icon" >
            <svg width="20" height="17" aria-hidden="true" >
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Я&nbsp;согласен с
            <a className="link link--active-silver link--underlined" href="#!">правилами обработки персональных данных</a>
            &nbsp;и пользовательским соглашением
          </span>
        </label>
        {errors.userCheck && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">{errors.userCheck?.message}</span>}
      </form>
    </div>
  );
}

export default FormLogin;

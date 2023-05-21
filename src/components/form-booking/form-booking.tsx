import { useForm, SubmitHandler, } from 'react-hook-form';
import { getIdMarkerBooking } from '../../store/data-process/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { BookingData } from '../../types/types-api';
import { bookingAction } from '../../store/api-actions';

interface IFormValue {
  userName: string;
  userTel: number;
  userPerson: number;
  userCheckChildren: boolean;
  userCheckRules: boolean;
  timeDay: string;
}

type FormTimesProps = {
  time: string;
  isAvailable: boolean;
}

type FormSlotsTimeProps = {
  slotsTime: {
    today: FormTimesProps[];
    tomorrow: FormTimesProps[];
  };
  peopleMinMax: number[];
  questId: string;
}

function FormBooking({ slotsTime, peopleMinMax, questId }: FormSlotsTimeProps) {

  const dispatch = useAppDispatch();

  const { today, tomorrow } = slotsTime;
  const idBookingMap = useAppSelector(getIdMarkerBooking);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<IFormValue>({
    mode: 'onChange',
  });

  const sendBooking = (bookingData: BookingData) => {
    dispatch(bookingAction(bookingData));
  };

  const onSubmit: SubmitHandler<IFormValue> = (data) => {

    const { timeDay, userName, userTel, userPerson, userCheckChildren } = data;

    const days = timeDay.split(' ').map((day) => day);

    sendBooking({
      questIdActive: questId,
      date: days[0],
      time: days[1],
      contactPerson: userName,
      phone: String(userTel),
      withChildren: userCheckChildren,
      peopleCount: Number(userPerson),
      placeId: String(idBookingMap),
    });
  };

  return (
    <form className="booking-form" onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">

            {today.map((date) => {
              const times = date.time.split(':');
              return (
                <label key={date.time} className="custom-radio booking-form__date">
                  <input
                    type="radio"
                    value={`today ${date.time}`}
                    {...register('timeDay', {
                      required: 'Выберите день и время',
                    })}
                    id={`today${times[0]}h${times[1]}m`}
                    disabled={date.isAvailable}
                  />
                  <span className="custom-radio__label">{date.time}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {tomorrow.map((date) => {
              const times = date.time.split(':');
              return (
                <label key={date.time} className="custom-radio booking-form__date">
                  <input
                    type="radio"
                    value={`tomorrow ${date.time}`}
                    {...register('timeDay', {
                      required: 'Выберите день и время',
                    })}
                    id={`tomorrow${times[0]}h${times[1]}m`}
                    disabled={date.isAvailable}
                  />
                  <span className="custom-radio__label">{date.time}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
        {errors.timeDay && <span role="alert" style={{ display: 'block', width: '100%', textAlign: 'center', color: 'red', font: 'bold', fontSize: '2em', marginTop: '20px' }}>{errors.timeDay?.message}</span>}
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input
            type="text"
            {...register('userName', {
              required: 'Введите имя',
              pattern: {
                value: /[А-Яа-яЁёA-Za-z'-]{1,}/,
                message: 'Введите корректное имя',
              },
            })}
            id="name"
            placeholder="Имя"
            aria-invalid={errors.userName ? 'true' : 'false'}
          />
          {errors.userName && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">{errors.userName?.message}</span>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            type="tel"
            {...register('userTel', {
              required: 'Введите телефон',
              pattern: {
                value: /[0-9]{10,}/,
                message: 'Введите корректный номер телефона'
              }
            })}
            id="tel"
            placeholder="Телефон"
            aria-invalid={errors.userTel ? 'true' : 'false'}
          />
          {errors.userTel && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">{errors.userTel?.message}</span>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            type="number"
            {...register('userPerson', {
              required: `Введите количество участников от ${peopleMinMax[0]} до ${peopleMinMax[1]}`,
              min: peopleMinMax[0],
              max: peopleMinMax[1]
            })}
            id="person"
            placeholder={`Количество участников от ${peopleMinMax[0]} до ${peopleMinMax[1]}`}
            aria-invalid={errors.userPerson ? 'true' : 'false'}
          />
          {errors.userPerson && errors.userPerson.type === 'min' && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">Введите больше {peopleMinMax[0]} человек</span>}
          {errors.userPerson && errors.userPerson.type === 'max' && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">Введите меньше {peopleMinMax[1]} человек</span>}
          {errors.userPerson && errors.userPerson.type === 'required' && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">{errors.userPerson?.message}</span>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            {...register('userCheckChildren')}
            id="children"
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit" >Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          type="checkbox"
          {...register('userCheckRules', {
            required: 'Вы не дали согласие.',
          })}
          id="id-order-agreement"
        />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#!">правилами обработки персональных данных</a>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
      {errors.userCheckRules && <span style={{ color: 'red', fontWeight: 'bold', marginBottom: '-41px' }} role="alert">{errors.userCheckRules?.message}</span>}
    </form>
  );
}

export default FormBooking;

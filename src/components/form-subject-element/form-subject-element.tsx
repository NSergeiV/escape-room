import { topic } from '../../const/const';
import { FormElementProps } from '../../types/types-props';

function FormSubjectElement({ sort, itemName, heandleInput }: FormElementProps): JSX.Element {

  return (
    <li className="filter__item">
      <input type="radio" name="type" id={itemName} onChange={heandleInput} checked={sort === itemName} />
      <label className="filter__label" htmlFor={itemName}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref={itemName === 'all' ? `#icon-${itemName}-quests` : `#icon-${itemName}`}></use>
        </svg>
        <span className="filter__label-text">{topic[itemName]}</span>
      </label>
    </li>
  );
}

export default FormSubjectElement;

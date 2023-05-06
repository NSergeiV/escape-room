import { topicsRus } from '../../const/const';
import { FormElementProps } from '../../types/types-props';

// TODO: сделать checked по умолчанию
function FormSubjectElement({ itemName, indexNumber }: FormElementProps): JSX.Element {
  return (
    <li className="filter__item">
      <input type="radio" name="type" id={itemName} />
      <label className="filter__label" htmlFor={itemName}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref={`#icon-${itemName}-quests`}></use>
        </svg><span className="filter__label-text">{topicsRus[indexNumber]}</span>
      </label>
    </li>
  );
}

export default FormSubjectElement;

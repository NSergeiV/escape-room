import { complexity } from '../../const/const';
import { FormElementProps } from '../../types/types-props';

function FormComplexityElement({ sort, itemName, heandleInput }: FormElementProps) {

  return (
    <li className="filter__item">
      <input type="radio" name="level" id={itemName} onChange={heandleInput} checked={sort === itemName} />
      <label className="filter__label" htmlFor={itemName}>
        <span className="filter__label-text">{complexity[itemName]}</span>
      </label>
    </li>
  );
}

export default FormComplexityElement;

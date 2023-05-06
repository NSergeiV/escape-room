import { difficultiesRus } from '../../const/const';
import { FormElementProps } from '../../types/types-props';

// TODO: сделать checked по умолчанию
function FormComplexityElement({ itemName, indexNumber }: FormElementProps) {
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={itemName} />
      <label className="filter__label" htmlFor={itemName}>
        <span className="filter__label-text">{difficultiesRus[indexNumber]}</span>
      </label>
    </li>
  );
}

export default FormComplexityElement;

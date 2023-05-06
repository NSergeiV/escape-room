import { difficulties } from '../../const/const';
import FormComplexityElement from '../form-complexity-element/form-complexity-element';

function FormComplexityList(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {difficulties.map((item, index) => <FormComplexityElement key={item} itemName={item} indexNumber={index} />)}
      </ul>
    </fieldset>
  );
}

export default FormComplexityList;

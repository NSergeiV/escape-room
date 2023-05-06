import { topics } from '../../const/const';
import FormSubjectElement from '../form-subject-element/form-subject-element';

function FormSubjectList(): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {topics.map((item, index) => <FormSubjectElement key={item} itemName={item} indexNumber={index} />)}
      </ul>
    </fieldset>
  );
}

export default FormSubjectList;

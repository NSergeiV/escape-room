import { useEffect, useState } from 'react';

import { difficulties, topics } from '../../const/const';

import FormSubjectElement from '../form-subject-element/form-subject-element';
import FormComplexityElement from '../form-complexity-element/form-complexity-element';
import { useAppDispatch } from '../../hooks/hook';
import { filterQuest } from '../../store/data-process/data-process';

function MainForm(): JSX.Element {

  const dispatch = useAppDispatch();
  const [sort, setSort] = useState({
    type: 'all',
    level: 'any',
  });

  const handleFormInput = (event: React.FormEvent<HTMLInputElement>): void => {

    const { id, name } = event.target as HTMLInputElement;

    setSort({
      ...sort,
      [name]: id,
    });
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(filterQuest(sort));
    }

    return () => {
      isMounted = false;
    };
  }, [sort, dispatch]);

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {topics.map((item, index) => <FormSubjectElement key={item} sort={sort.type} itemName={item} choiceNumber={index} heandleInput={handleFormInput} />)}
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {difficulties.map((item, index) => <FormComplexityElement key={item} sort={sort.level} itemName={item} heandleInput={handleFormInput} choiceNumber={index} />)}
        </ul>
      </fieldset>
    </form>
  );
}

export default MainForm;

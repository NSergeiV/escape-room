import FormComplexityList from '../form-complexity-list/form-complexity-list';
import FormSubjectList from '../form-subject-list/form-subject-list';

function MainForm(): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <FormSubjectList />
      <FormComplexityList />
    </form>
  );
}

export default MainForm;

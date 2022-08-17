import { useDispatch } from 'react-redux';
import { useNavigate, useMatch } from 'react-router-dom';
import Header from '../Header/Header';
import TransactionFormWithCategories from 'components/TransactionFormWithCategories/TransactionFormWithCategories';
import {
  addCostsThunk,
  addIncomesThunk,
} from 'redux/transactions/transactionsOperations';

const MainPage = () => {
  const dispatch = useDispatch();

  const { params } = useMatch('/*');
  const navigate = useNavigate();

  const handleToggleCategoriesList = () => {
    params['*'] === '' && navigate('category');
    params['*'] === 'category' && navigate('');
  };

  const addTransaction = form => {
    form.transType === 'costs' && dispatch(addCostsThunk(form));
    form.transType === 'incomes' && dispatch(addIncomesThunk(form));
  };

  return (
    <div className="container">
      <Header
        title={params['*'] === 'category' ? ' Категорії ' : 'Журнал витрат'}
        icon={params['*'] === 'category' ? '#icon-arrow-left' : null}
        cbOnClick={handleToggleCategoriesList}
      />
      <TransactionFormWithCategories
        cbOnSubmit={addTransaction}
        params={params}
      />
    </div>
  );
};

export default MainPage;

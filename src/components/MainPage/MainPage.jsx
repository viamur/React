import { nanoid } from 'nanoid';
import TransactionFormWithCategories from 'components/TransactionFormWithCategories/TransactionFormWithCategories';
import { useDispatch } from 'react-redux';
import { useNavigate, useMatch } from 'react-router-dom';
import Header from '../Header/Header';
import { addCosts, addIncomes } from 'redux/transactions/transactionsSlice';

const MainPage = () => {
  const dispatch = useDispatch();

  const { params } = useMatch('/*');
  const navigate = useNavigate();

  const handleToggleCategoriesList = () => {
    params['*'] === '' && navigate('category');
    params['*'] === 'category' && navigate('');
  };

  const addTransaction = form => {
    const id = nanoid();
    form.transType === 'costs' && dispatch(addCosts({ ...form, id }));
    form.transType === 'incomes' && dispatch(addIncomes({ ...form, id }));
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

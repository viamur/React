import Header from 'components/Header/Header';
import TransactionFormWithCategories from 'components/TransactionFormWithCategories/TransactionFormWithCategories';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  editCostsThunk,
  editIncomesThunk,
} from 'redux/transactions/transactionsOperations';

const EditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { transType, id } = params;
  const transactions = useSelector(state => state.transactions);

  const transaction = transactions[transType].find(el => el.id === id);

  const editTransaction = form => {
    form.transType === 'costs' && dispatch(editCostsThunk(form));
    form.transType === 'incomes' && dispatch(editIncomesThunk(form));

    navigate('/');
  };

  return (
    <div className="container">
      <Header title={'Edit page'} icon={'#icon-arrow-left'} />
      <TransactionFormWithCategories
        params={params}
        transaction={transaction}
        cbOnSubmit={editTransaction}
      />
    </div>
  );
};

export default EditPage;

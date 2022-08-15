import Header from 'components/Header/Header';
import TransactionFormWithCategories from 'components/TransactionFormWithCategories/TransactionFormWithCategories';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editCosts, editIncomes } from 'redux/transactions/transactionsSlice';

const EditPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { transType, id } = params;
  const transactions = useSelector(state => state.transactions);

  const transaction = transactions[transType].find(el => el.id === id);

  const editTransaction = form => {
    form.transType === 'costs' && dispatch(editCosts(form));
    form.transType === 'incomes' && dispatch(editIncomes(form));
  };

  return (
    <>
      <Header title={'Edit page'} icon={'#icon-arrow-left'} />
      <TransactionFormWithCategories
        params={params}
        transaction={transaction}
        cbOnSubmit={editTransaction}
      />
    </>
  );
};

export default EditPage;

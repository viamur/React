import moment from 'moment';
import Header from '../Header/Header';
import sprite from '../../assets/sprite.svg';
import s from './TransactionHistoryPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  getTransactionsThunk,
  removeCostsThunk,
  removeIncomesThunk,
} from 'redux/transactions/transactionsOperations';
import { getHasTransactions } from 'redux/transactions/transactionsSelectors';
import ContextMenu from '../ContextMenu/ContextMenu';

const TransactionHistoryPage = () => {
  const { transType } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions[transType]);
  const hasTransactions = useSelector(getHasTransactions);

  const [openMenuId, setOpenMenuId] = useState(null);

  const transactionName = transType === 'costs' ? 'Costs' : 'Incomes';

  const handleRemoveBtn = id => {
    transType === 'costs' && dispatch(removeCostsThunk(id));
    transType === 'incomes' && dispatch(removeIncomesThunk(id));
  };

  useEffect(() => {
    if (!hasTransactions) dispatch(getTransactionsThunk());
  }, [dispatch, hasTransactions]);

  return (
    <div className="container">
      <Header
        title={`Transaction  ${transactionName}`}
        icon={'#icon-arrow-left'}
      />
      <ul className={s.list}>
        {transactions.map((el, idx) => {
          const day = moment(el.date).format('dd, DD MMM. YYYY');
          const onRemoveClick = () => handleRemoveBtn(el.id);
          const onEditClick = () => navigate(`/edit/${el.transType}/${el.id}/`);

          return (
            <li
              key={idx}
              className={s.item}
              style={{ position: 'relative' }}
              onClick={e => {
                if (e.target !== e.currentTarget) return;
                setOpenMenuId(null);
              }}
            >
              <div>
                <p>
                  {day}
                  <span className={s.span}> {el.time} </span>
                </p>
                <p className={s.comment}>{el.comment} </p>
              </div>

              <div className={s.right}>
                <div className={s.rightBlock}>
                  <p className={s.summ}>{el.summ} </p>
                  <p className={s.currency}>{el.currency} </p>
                </div>
                <button
                  type="button"
                  className={s.btnInfo}
                  onClick={() => setOpenMenuId(el.id)}
                >
                  <svg className={s.svg}>
                    <use href={sprite + '#icon-navigation-more'} />
                  </svg>
                </button>
              </div>
              {openMenuId === el.id && (
                <ContextMenu
                  onRemoveClick={onRemoveClick}
                  onEditClick={onEditClick}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionHistoryPage;

import moment from 'moment';
import Header from '../Header/Header';
import sprite from '../../assets/sprite.svg';
import s from './TransactionHistoryPage.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  removeCosts,
  removeIncomes,
} from 'redux/transactions/transactionsSlice';
import { useEffect } from 'react';
import { getTransactionsThunk } from 'redux/transactions/transactionsOperations';
import { getHasTransactions } from 'redux/transactions/transactionsSelectors';

const TransactionHistoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { transType } = useParams();

  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions[transType]);
  const hasTransactions = useSelector(getHasTransactions);
  
  const [openMenuId, setOpenMenuId] = useState(null);

  const transactionName = transType === 'costs' ? 'Costs' : 'Incomes';

  const handleRemoveBtn = id => {
    transType === 'costs' && dispatch(removeCosts(id));
    transType === 'incomes' && dispatch(removeIncomes(id));
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
                <div
                  style={{ position: 'absolute', right: '30%', bottom: '0' }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      navigate('/edit/' + transType + '/' + el.id, {
                        state: location,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button type="button" onClick={() => handleRemoveBtn(el.id)}>
                    Remove
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionHistoryPage;

import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TransactionContext = createContext();

const TransactionsProvider = ({ children }) => {
  const [incomes, setIncomes] = useLocalStorage('incomes', []);
  const [costs, setCosts] = useLocalStorage('costs', []);

  const addTransaction = transaction => {
    const { transType } = transaction;

    transType === 'costs' && setCosts(prev => [...prev, transaction]);
    transType === 'incomes' && setIncomes(prev => [...prev, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ incomes, costs, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionsProvider;

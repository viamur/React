import moment from 'moment';
import { useSelector } from 'react-redux';
import CategoriesList from 'components/categoriesList/CategoriesList';
import TransactionForm from 'components/transactionForm/TransactionForm';
import { Suspense, useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import s from './TransactionFormWithCategories.module.css';

const normalizedTime = moment().format('HH:mm');
const normalizedDate = moment().format('YYYY-MM-DD');

const initialForm = {
  category: '',
  date: normalizedDate,
  time: normalizedTime,
  summ: '',
  currency: 'UAH',
  comment: '',
  transType: 'costs',
};

const TransactionFormWithCategories = ({ params, transaction, cbOnSubmit }) => {
  const location = useLocation();

  const navigate = useNavigate();
  const categories = useSelector(state => state.categories);
  const [form, setForm] = useState(transaction ?? initialForm);

  useEffect(() => {
    const title = categories[form.transType][0]?.title || 'Choise category';
    setForm(prev => ({ ...prev, category: title }));
  }, [categories, form.transType]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const setCategories = category => {
    setForm(prev => ({ ...prev, category }));
    handleToggleCategoriesList();
  };

  const resetForm = () => {
    const { category, ...rest } = initialForm;
    setForm(prev => ({ ...prev, ...rest }));
  };

  const handleToggleCategoriesList = () => {
    params['*'] === '' && navigate('category', { state: location });
    params['*'] === 'category' && navigate('');
  };

  return (
    <main className={s.main}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route
            path="category"
            element={<CategoriesList setCategories={setCategories} transType={form.transType} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            index
            element={
              <>
                <TransactionForm
                  handleChange={handleChange}
                  form={form}
                  handleOpenCategoriesList={handleToggleCategoriesList}
                  resetForm={resetForm}
                  cbOnSubmit={cbOnSubmit}
                />
                <div className={s.blockBtn}>
                  <Link to="/history/costs" className={s.incomes}>
                    Всі витрати
                  </Link>
                  <Link to="/history/incomes" className={s.incomes}>
                    Всі прибутки
                  </Link>
                </div>
              </>
            }
          />
        </Routes>
      </Suspense>
    </main>
  );
};

export default TransactionFormWithCategories;

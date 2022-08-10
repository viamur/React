import { useEffect, useState, useContext, lazy, Suspense } from 'react';
import moment from 'moment';
import { Link, Route, Routes, useNavigate, useMatch } from 'react-router-dom';
import Header from '../Header/Header';
import s from './MainPage.module.css';
import { CategoriesContext } from '../../context/CategoriesProvider';
const CategoriesList = lazy(() => import('../CategoriesList/CategoriesList'));
const TransactionForm = lazy(() =>
  import('../TransactionForm/TransactionForm')
);

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

const MainPage = () => {
  const { params } = useMatch('/*');

  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);

  const categoriesContextValue = useContext(CategoriesContext);

  useEffect(() => {
    const title = categoriesContextValue[form.transType][0].title;
    setForm(prev => ({ ...prev, category: title }));
  }, [categoriesContextValue, form.transType]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const setCategories = category => {
    setForm(prev => ({ ...prev, category }));
    handleToggleCategoriesList();
  };

  const handleToggleCategoriesList = () => {
    params['*'] === '' && navigate('category');
    params['*'] === 'category' && navigate('');
  };

  const resetForm = () => {
    const { category, ...rest } = initialForm;
    setForm(prev => ({ ...prev, ...rest }));
  };

  return (
    <div className="container">
      <Header
        title={params['*'] === 'category' ? ' Категорії ' : 'Журнал витрат'}
        icon={params['*'] === 'category' ? '#icon-arrow-left' : null}
        cbOnClick={handleToggleCategoriesList}
      />
      <main className={s.main}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route
              path="category"
              element={
                <CategoriesList
                  setCategories={setCategories}
                  transType={form.transType}
                />
              }
            />
            <Route
              index
              element={
                <>
                  <TransactionForm
                    handleChange={handleChange}
                    form={form}
                    handleOpenCategoriesList={handleToggleCategoriesList}
                    resetForm={resetForm}
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
    </div>
  );
};

export default MainPage;

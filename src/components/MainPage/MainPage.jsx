import { useEffect, useState, useContext } from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';
import { Link, Route, Routes, useNavigate, useMatch } from 'react-router-dom';
import CategoriesList from '../CategoriesList/CategoriesList';
import Header from '../Header/Header';
import s from './MainPage.module.css';
import { CategoriesContext } from '../../context/CategoriesProvider';

const initialForm = {
  category: '',
  date: '2022-07-28',
  time: '14:14',
  summ: '',
  currency: 'UAH',
  comment: '',
  transType: 'costs',
};

const MainPage = ({ onOpenPage }) => {
  const { params } = useMatch('/*');
  const param = useMatch('/*');
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [isCategoriesList, setIsCategoriesList] = useState(false);

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
    setForm(initialForm);
  };
  return (
    <div className="container">
      <Header
        title={params['*'] === 'category' ? ' Категорії ' : 'Журнал витрат'}
        icon={params['*'] === 'category' ? '#icon-arrow-left' : null}
        cbOnClick={handleToggleCategoriesList}
      />
      <main className={s.main}>
        <Routes>
          <Route
            path="category"
            element={<CategoriesList setCategories={setCategories} transType={form.transType} />}
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
      </main>
    </div>
  );
};

export default MainPage;

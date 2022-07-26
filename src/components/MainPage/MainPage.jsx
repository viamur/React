import TransactionForm from '../TransactionForm/TransactionForm';
import CategoriesList from '../CategoriesList/CategoriesList';
import Header from '../Header/Header';
import s from './MainPage.module.css';

const MainPage = () => {
  const isCategoriesList = false;

  return (
    <>
      <Header
        title={isCategoriesList ? ' Категорії ' : 'Журнал витрат'}
        icon={isCategoriesList ? '#icon-arrow-left' : null}
      />
      <main className={s.main}>
        {isCategoriesList ? (
          <CategoriesList />
        ) : (
          <>
            <TransactionForm />
            <div className={s.blockBtn}>
              <button className={s.costs}>Всі витрати</button>
              <button className={s.incomes}>Всі прибутки</button>
            </div>
          </>
        )}
      </main>
    </>
  );
};
export default MainPage;

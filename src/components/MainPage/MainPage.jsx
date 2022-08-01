import TransactionForm from '../TransactionForm/TransactionForm';
import CategoriesList from '../CategoriesList/CategoriesList';
import Header from '../Header/Header';
import s from './MainPage.module.css';
import { Component } from 'react';

const initialForm = {
  date: '2022-07-28',
  time: '14:14',
  category: 'продукти',
  summ: '',
  currency: 'UAH',
  comment: '',
  transType: 'costs',
};

class MainPage extends Component {
  state = {
    isCategoriesList: false,
    ...initialForm,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  setCategories = category => {
    this.setState({ category });
  };

  handleOpenCategoriesList = () => {
    this.setState({ isCategoriesList: true });
  };
  handleCloseCategoriesList = () => {
    this.setState({ isCategoriesList: false });
  };

  resetForm = () => {
    this.setState(initialForm);
  };

  render() {
    const { onIncomesBtnClick, onCostsBtnClick, addCategory, categories, addTransaction } =
      this.props;
    const { isCategoriesList, ...form } = this.state;
    return (
      <div className="container">
        <Header
          title={isCategoriesList ? ' Категорії ' : 'Журнал витрат'}
          icon={isCategoriesList ? '#icon-arrow-left' : null}
          cbOnClick={this.handleCloseCategoriesList}
        />
        <main className={s.main}>
          {isCategoriesList ? (
            <CategoriesList
              categories={categories}
              addCategory={addCategory}
              setCategories={this.setCategories}
            />
          ) : (
            <>
              <TransactionForm
                handleChange={this.handleChange}
                form={form}
                handleOpenCategoriesList={this.handleOpenCategoriesList}
                addTransaction={addTransaction}
                resetForm={this.resetForm}
              />
              <div className={s.blockBtn}>
                <button className={s.costs} onClick={onCostsBtnClick}>
                  Всі витрати
                </button>
                <button className={s.incomes} onClick={onIncomesBtnClick}>
                  Всі прибутки
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    );
  }
}
export default MainPage;

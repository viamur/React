import s from './TransactionForm.module.css';

const TransactionForm = () => {
  return (
    <form className={s.form}>
      <div className={s.div}>
        <label className={s.day}>
          День
          <input className={s.inputDay} type="date" name="date" />
        </label>
        <label className={s.time}>
          Час
          <input className={s.inputTime} type="time" name="time" />
        </label>
      </div>
      <label className={s.category}>
        Категорія
        <input className={s.categoryInput} type="button" name="category" value="продукти" />
      </label>
      <label className={s.summa}>
        Сума
        <input className={s.summaInput} type="text" name="summ" placeholder="Введіть суму" />
      </label>
      <label className={s.valyta}>
        Валюта
        <input className={s.valytaInput} type="button" name="currency" value="UAH" />
      </label>
      <label className={s.comment}>
        <input className={s.commentInput} type="text" name="comment" placeholder="Коментар" />
      </label>
    </form>
  );
};
export default TransactionForm;

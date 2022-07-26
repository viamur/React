import s from './CategoriesList.module.css';
import sprite from '../../assets/sprite.svg';

const CategoriesList = () => {
  return (
    <>
      <main>
        <ul className={s.list}>
          <li className={s.item}>
            <p> Їжа</p>
            <button type="button" className={s.btnInfo}>
              <svg className={s.svg}>
                <use href={sprite + '#icon-navigation-more'} />
              </svg>
            </button>
          </li>
          <li className={s.item}>
            <p>Різне</p>
            <button type="button" className={s.btnInfo}>
              <svg className={s.svg}>
                <use href={sprite + '#icon-navigation-more'} />
              </svg>
            </button>
          </li>
        </ul>
        <form className={s.form}>
          <input className={s.input} type="text" placeholder="Нова категорія" />
          <button className={s.btnAdd} type="submit">
            <svg width="15" height="15">
              <use href={sprite + '#icon-plus'} />
            </svg>
          </button>
        </form>
      </main>
    </>
  );
};
export default CategoriesList;

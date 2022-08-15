import { nanoid } from 'nanoid';
import { useState } from 'react';
import s from './CategoriesList.module.css';
import sprite from '../../assets/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addCostsCategory, addIncomesCategory } from 'redux/categories/categoriesOperations';

const CategoriesList = ({ transType, setCategories }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories[transType]);

  const [input, setInput] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    transType === 'incomes' && dispatch(addIncomesCategory({ title: input }));
    transType === 'costs' && dispatch(addCostsCategory({ title: input }));
  };

  return (
    <>
      <main>
        <ul className={s.list}>
          {categories.map(({ title, id }) => (
            <li key={id} className={s.item}>
              <p onClick={() => setCategories(title)}>{title}</p>
              <button type="button" className={s.btnInfo}>
                <svg className={s.svg}>
                  <use href={sprite + '#icon-navigation-more'} />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            onChange={handleChange}
            className={s.input}
            type="text"
            name="input"
            placeholder="Нова категорія"
          />
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

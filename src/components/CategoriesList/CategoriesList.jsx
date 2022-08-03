import { nanoid } from 'nanoid';
import s from './CategoriesList.module.css';
import sprite from '../../assets/sprite.svg';
import { Component } from 'react';

class CategoriesList extends Component {
  state = {
    input: '',
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { addCategory, transType } = this.props;
    const { input } = this.state;
    addCategory({ title: input, id: nanoid() }, transType);
  };

  render() {
    const { setCategories, categories } = this.props;
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
          <form onSubmit={this.handleSubmit} className={s.form}>
            <input
              onChange={this.handleChange}
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
  }
}
export default CategoriesList;

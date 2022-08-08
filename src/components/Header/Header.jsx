import s from './Header.module.css';
import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

const Header = ({ title, icon }) => {
  return (
    <header className={s.header}>
      {icon && (
        <Link to="/" className={s.btn}>
          <svg width="15" height="15">
            <use href={sprite + icon} />
          </svg>
        </Link>
      )}
      <h1 className={s.title}>{title}</h1>
    </header>
  );
};

export default Header;

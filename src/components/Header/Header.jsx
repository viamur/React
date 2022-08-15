import s from './Header.module.css';
import sprite from '../../assets/sprite.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ title, icon }) => {
  const location = useLocation();

  return (
    <header className={s.header}>
      {icon && (
        <Link to={location.state ?? '/'} className={s.btn}>
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

import s from './Header.module.css';
import sprite from '../../assets/sprite.svg';
import { Link, useLocation } from 'react-router-dom';
import { logOutUser } from '../../redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/authSelector';

const Header = ({ title, icon }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

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
      {isAuth && (
        <button
          type="button"
          className={s.btnLog}
          onClick={() => dispatch(logOutUser())}
        >
          LogOut
        </button>
      )}
    </header>
  );
};

export default Header;

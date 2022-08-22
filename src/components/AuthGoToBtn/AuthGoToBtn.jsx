import { Link } from 'react-router-dom';
import s from './AuthGoToBtn.module.css';

const AuthGoToBtn = ({ title, path }) => {
  return (
    <Link className={s.btn} to={path}>
      {title}
    </Link>
  );
};

export default AuthGoToBtn;

import Header from '../components/Header/Header';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthGoToBtn from '../components/AuthGoToBtn/AuthGoToBtn';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { googleAuth } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispath = useDispatch();
  return (
    <div className="container">
      <Header title={'Login'} />
      <AuthForm isLogin={true} />
      <AuthGoToBtn title={'Go to Registration'} path={'/register'} />
      <button type="button" onClick={() => dispath(googleAuth())}>
        Google
      </button>
    </div>
  );
};

export default LoginPage;

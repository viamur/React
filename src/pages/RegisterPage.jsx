import AuthForm from '../components/AuthForm/AuthForm';
import AuthGoToBtn from '../components/AuthGoToBtn/AuthGoToBtn';
import Header from '../components/Header/Header';

const RegisterPage = () => {
  return (
    <div className="container">
      <Header title={'Registration'} />
      <AuthForm />
      <AuthGoToBtn title={'Go to Login'} path={'/login'} />
    </div>
  );
};

export default RegisterPage;

import AuthForm from '../components/AuthForm/AuthForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <h2>Login</h2>
      <AuthForm isLogin={true} />
      <Link to="/register">Go to Registration</Link>
    </>
  );
};

export default LoginPage;

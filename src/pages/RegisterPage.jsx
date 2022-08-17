import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';

const RegisterPage = () => {
  return (
    <>
      <h2>Registration</h2>
      <AuthForm />
      <Link to="/login">Go to login</Link>
    </>
  );
};

export default RegisterPage;

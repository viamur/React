import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk, registerUserThunk } from 'redux/auth/authOperations';
import s from './AuthForm.module.css';
const initialState = { email: '', password: '' };

const AuthForm = ({ isLogin = false }) => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const input = e.target;

    setForm(prev => ({ ...prev, [input.name]: input.value.trim() }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isNotValidForm = Object.values(form).includes('');
    if (isNotValidForm) return;

    isLogin && dispatch(loginUserThunk(form));
    !isLogin && dispatch(registerUserThunk(form));

    setForm(initialState);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="email"
        placeholder="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className={s.input}
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={handleChange}
      />
      <button className={s.btn} type="Submit">
        {isLogin ? 'Login' : 'Registration'}{' '}
      </button>
    </form>
  );
};

export default AuthForm;

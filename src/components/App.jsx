import EditPage from 'pages/EditPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getToken } from 'redux/auth/authSelector';
import { getIncomesCategories } from 'redux/categories/categoriesOperations';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const TransactionHistoryPage = lazy(() =>
  import('./TransactionHistoryPage/TransactionHistoryPage')
);

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIncomesCategories());
  }, []);

  const isToken = useSelector(getToken);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      {isToken ? (
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/history/:transType" element={<TransactionHistoryPage />} />
          <Route path="/edit/:transType/:id/*" element={<EditPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Suspense>
  );
};

import EditPage from 'pages/EditPage';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
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

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/history/:transType" element={<TransactionHistoryPage />} />
        <Route path="/edit/:transType/:id/*" element={<EditPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const TransactionHistoryPage = lazy(() =>
  import('./TransactionHistoryPage/TransactionHistoryPage')
);

export const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route
          path="/history/:transType"
          element={<TransactionHistoryPage />}
        />
        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </Suspense>
  );
};

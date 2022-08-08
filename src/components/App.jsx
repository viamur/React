import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage/TransactionHistoryPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="/history/:transType" element={<TransactionHistoryPage />} />
      <Route path="*" element={<p>Error</p>} />
    </Routes>
  );

  // switch (activePage) {
  //   case 'main':
  //     return <MainPage onOpenPage={onOpenPage} />;
  //   case 'costs':
  //     return <TransactionHistoryPage transType={activePage} onReturnBtnClick={onOpenPage} />;
  //   case 'incomes':
  //     return <TransactionHistoryPage transType={activePage} onReturnBtnClick={onOpenPage} />;
  //   default:
  //     return;
  // }
};

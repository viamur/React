import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import CategoriesProvider from 'context/CategoriesProvider';
import TransactionsProvider from 'context/TransactionsProvider';
import { BrowserRouter } from 'react-router-dom';
import './redux/store';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TransactionsProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </TransactionsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

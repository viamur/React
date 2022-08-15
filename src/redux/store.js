import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import transactionsReducer from './transactions/transactionsSlice';
import categoriesReducer from './categories/categoriesReducer';

const transactionsPersistConfig = {
  key: 'transactions',
  version: 1,
  storage,
};
// const categoriesPersistConfig = {
//   key: 'categories',
//   version: 1,
//   storage,
// };

// const persistedCategoriesReducer = persistReducer(
//   categoriesPersistConfig,
//   categoriesReducer
// );

const persistedTransactionsReducer = persistReducer(transactionsPersistConfig, transactionsReducer);

const store = configureStore({
  reducer: {
    transactions: persistedTransactionsReducer,
    categories: categoriesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;

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
import transactionsReducer from './transactions/transactionsSlice';
import categoriesReducer from './categories/categoriesReducer';
import authReducer from './auth/authSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'idToken',
  storage,
  whitelist: ['token', 'localId'],
};

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories: categoriesReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

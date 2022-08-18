const { createAsyncThunk } = require('@reduxjs/toolkit');
const { addTransactionApi, getTransactionsApi } = require('utils/firebaseApi');

export const addCostsThunk = createAsyncThunk(
  'transactions/addCosts',
  async (transaction, { rejectWithValue, getState }) => {
    const { localId, token } = getState().auth;
    try {
      const newCosts = await addTransactionApi({ transaction, localId, token });
      return newCosts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addIncomesThunk = createAsyncThunk(
  'transactions/addIncomes',
  async (transaction, { rejectWithValue, getState }) => {
    const { localId, token } = getState().auth;
    try {
      const newIncomes = await addTransactionApi({ transaction, localId, token });
      return newIncomes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionsThunk = createAsyncThunk(
  'transactions/getAll',
  async (_, { rejectWithValue, getState }) => {
    const { localId, token } = getState().auth;
    try {
      const transactions = await getTransactionsApi({ localId, token });
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

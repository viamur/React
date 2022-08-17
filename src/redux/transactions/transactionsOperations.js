const { createAsyncThunk } = require('@reduxjs/toolkit');
const { addTransactionApi, getTransactionsApi } = require('utils/firebaseApi');

export const addCostsThunk = createAsyncThunk(
  'transactions/addCosts',
  async (transaction, { rejectWithValue }) => {
    try {
      const newCosts = await addTransactionApi(transaction);
      return newCosts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addIncomesThunk = createAsyncThunk(
  'transactions/addIncomes',
  async (transaction, { rejectWithValue }) => {
    try {
      const newIncomes = await addTransactionApi(transaction);
      return newIncomes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionsThunk = createAsyncThunk(
  'transactions/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await getTransactionsApi();
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

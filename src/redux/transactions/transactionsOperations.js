const { createAsyncThunk } = require('@reduxjs/toolkit');
const {
  addTransactionApi,
  getTransactionsApi,
  removeTransactionApi,
  editTransactionApi,
} = require('utils/firebaseApi');

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
      const newIncomes = await addTransactionApi({
        transaction,
        localId,
        token,
      });
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

export const removeCostsThunk = createAsyncThunk(
  'transactions/removeCosts',
  async (id, { rejectWithValue, getState }) => {
    const { localId, token } = getState().auth;

    try {
      const deleteCostsId = await removeTransactionApi({
        localId,
        transType: 'costs',
        id,
        token,
      });

      return deleteCostsId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeIncomesThunk = createAsyncThunk(
  'transactions/removeIncomes',
  async (id, { rejectWithValue, getState }) => {
    const { localId, token } = getState().auth;

    try {
      const deleteIncomesId = await removeTransactionApi({
        localId,
        transType: 'incomes',
        id,
        token,
      });

      return deleteIncomesId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editIncomesThunk = createAsyncThunk(
  'transactions/editIncomes',
  async (newData, { rejectWithValue, getState }) => {
    const { localId, token } = getState().auth;
    try {
      const editedIncomes = editTransactionApi({
        localId,
        transType: 'incomes',
        token,
        newData,
      });

      return editedIncomes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCostsThunk = createAsyncThunk(
  'transactions/editCosts',
  async (newData, { rejectWithValue, getState }) => {
    const { localId, token } = getState().auth;
    try {
      const editedCosts = editTransactionApi({
        localId,
        transType: 'costs',
        token,
        newData,
      });

      return editedCosts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

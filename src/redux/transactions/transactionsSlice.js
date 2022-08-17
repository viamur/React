import { createSlice } from '@reduxjs/toolkit';
import {
  addCostsThunk,
  addIncomesThunk,
  getTransactionsThunk,
} from './transactionsOperations';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    costs: [],
    incomes: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addCosts(state, { payload }) {
    //   return { ...state, costs: [...state.costs, payload] };
    // },
    // addIncomes(state, { payload }) {
    //   return { ...state, incomes: [...state.incomes, payload] };
    // },
    removeCosts(state, { payload }) {
      state.costs = state.costs.filter(el => el.id !== payload);
    },
    removeIncomes(state, { payload }) {
      state.incomes = state.incomes.filter(el => el.id !== payload);
    },
    editCosts(state, { payload }) {
      state.costs = state.costs.map(el =>
        el.id !== payload.id ? el : payload
      );
    },
    editIncomes(state, { payload }) {
      state.incomes = state.incomes.map(el =>
        el.id !== payload.id ? el : payload
      );
    },
  },
  extraReducers: {
    [addCostsThunk.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addCostsThunk.fulfilled]: (state, { payload }) => ({
      ...state,
      costs: [...state.costs, payload],
      isLoading: false,
    }),
    [addCostsThunk.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [addIncomesThunk.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addIncomesThunk.fulfilled]: (state, { payload }) => ({
      ...state,
      incomes: [...state.incomes, payload],
      isLoading: false,
    }),
    [addIncomesThunk.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),

    [getTransactionsThunk.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getTransactionsThunk.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoading: false,
    }),
    [getTransactionsThunk.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

export const {
  addCosts,
  addIncomes,
  removeCosts,
  removeIncomes,
  editCosts,
  editIncomes,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;

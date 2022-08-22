import { createSlice } from '@reduxjs/toolkit';
import {
  addCostsThunk,
  addIncomesThunk,
  editCostsThunk,
  editIncomesThunk,
  getTransactionsThunk,
  removeCostsThunk,
  removeIncomesThunk,
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

    [removeCostsThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [removeCostsThunk.fulfilled]: (state, { payload }) => {
      state.costs = state.costs.filter(el => el.id !== payload);
    },
    [removeCostsThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [removeIncomesThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [removeIncomesThunk.fulfilled]: (state, { payload }) => {
      state.incomes = state.costs.filter(el => el.id !== payload);
    },
    [removeIncomesThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [editIncomesThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [editIncomesThunk.fulfilled]: (state, { payload }) => {
      state.incomes = state.incomes.map(income =>
        income.id === payload.id ? payload : income
      );
    },
    [editIncomesThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [editCostsThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [editCostsThunk.fulfilled]: (state, { payload }) => {
      state.costs = state.costs.map(cost =>
        cost.id === payload.id ? payload : cost
      );
    },
    [editCostsThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
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

import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    costs: [],
    incomes: [],
  },
  reducers: {
    addCosts(state, { payload }) {
      return { ...state, costs: [...state.costs, payload] };
    },
    addIncomes(state, { payload }) {
      return { ...state, incomes: [...state.incomes, payload] };
    },
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

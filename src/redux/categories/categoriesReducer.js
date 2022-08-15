import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addCostsCategoryError,
  addCostsCategoryRequest,
  addCostsCategorySuccess,
  addIncomesCategoryError,
  addIncomesCategoryRequest,
  addIncomesCategorySuccess,
  getCostsCategoryError,
  getCostsCategoryRequest,
  getCostsCategorySuccess,
  getIncomesCategoryError,
  getIncomesCategoryRequest,
  getIncomesCategorySuccess,
} from './categoriesAtions';

const incomesCategoriesReducer = createReducer([], {
  [addIncomesCategorySuccess]: (state, { payload }) => [...state, payload],
  [getIncomesCategorySuccess]: (_, { payload }) => [...payload],
});

const costsCategoriesReducer = createReducer([], {
  [addCostsCategorySuccess]: (state, { payload }) => [...state, payload],
  [getCostsCategorySuccess]: (_, { payload }) => [...payload],
});

const isLoadingRegucer = createReducer(false, {
  [getIncomesCategoryRequest]: () => true,
  [getIncomesCategorySuccess]: () => false,
  [getCostsCategorySuccess]: () => false,
  [getCostsCategoryRequest]: () => true,
  [getIncomesCategoryError]: () => false,
  [getCostsCategoryError]: () => false,
  [addIncomesCategoryError]: () => false,
  [addCostsCategoryError]: () => false,
});

const errorCategoriesFetch = createReducer(null, {
  [getIncomesCategoryError]: (_, { payload }) => payload,
  [getIncomesCategoryRequest]: () => null,
  [getCostsCategoryRequest]: () => null,
  [getCostsCategoryError]: (_, { payload }) => payload,
  [addIncomesCategoryError]: (_, { payload }) => payload,
  [addCostsCategoryError]: (_, [payload]) => payload,
  [addCostsCategoryRequest]: () => null,
  [addIncomesCategoryRequest]: () => null,
});

const categoriesReducer = combineReducers({
  costs: costsCategoriesReducer,
  incomes: incomesCategoriesReducer,
  isLoading: isLoadingRegucer,
  error: errorCategoriesFetch,
});

export default categoriesReducer;

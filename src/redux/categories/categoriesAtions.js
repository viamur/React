import { createAction } from '@reduxjs/toolkit';

export const getIncomesCategoryRequest = createAction('categories/getIncomesRequest');
export const getCostsCategoryRequest = createAction('categories/getCostsRequest');

export const getIncomesCategorySuccess = createAction('categories/getIncomesSuccess');
export const getCostsCategorySuccess = createAction('categories/getCostsSuccess');

export const getIncomesCategoryError = createAction('categories/getIncomesError');
export const getCostsCategoryError = createAction('categories/getCostsError');

export const addIncomesCategoryRequest = createAction('categories/addIncomesRequest');
export const addCostsCategoryRequest = createAction('categories/addCostsRequest');

export const addIncomesCategorySuccess = createAction('categories/addIncomesSuccess');
export const addCostsCategorySuccess = createAction('categories/addCostsSuccess');

export const addIncomesCategoryError = createAction('categories/addIncomesError');
export const addCostsCategoryError = createAction('categories/addCostsError');
// export const removeIncomesCategory = createAction('categories/removeIncomes');
// export const removeCostsCategory = createAction('categories/removeCosts');

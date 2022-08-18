import { getCategoriesApi, addCategoryApi } from '../../utils/firebaseApi';
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

export const getIncomesCategories = () => async (dispatch, getState) => {
  const { localId, token } = getState().auth;
  dispatch(getIncomesCategoryRequest());
  dispatch(getCostsCategoryRequest());

  try {
    const { incomes, costs } = await getCategoriesApi({ localId, token });
    dispatch(getIncomesCategorySuccess(incomes));
    dispatch(getCostsCategorySuccess(costs));
  } catch (error) {
    dispatch(getIncomesCategoryError(error.message));
    dispatch(getCostsCategoryError(error.message));
  }
};

export const addIncomesCategory = category => async (dispatch, getState) => {
  const { localId, token } = getState().auth;
  dispatch(addIncomesCategoryRequest());
  try {
    const data = await addCategoryApi({ type: 'incomes', category, localId, token });
    dispatch(addIncomesCategorySuccess(data));
  } catch (error) {
    dispatch(addIncomesCategoryError(error.message));
  }
};

export const addCostsCategory = category => async (dispatch, getState) => {
  const { localId, token } = getState().auth;
  dispatch(addCostsCategoryRequest());
  try {
    const data = await addCategoryApi({ type: 'costs', category, localId, token });
    dispatch(addCostsCategorySuccess(data));
  } catch (error) {
    dispatch(addCostsCategoryError(error.message));
  }
};

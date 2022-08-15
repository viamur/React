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

export const getIncomesCategories = () => async dispatch => {
  dispatch(getIncomesCategoryRequest());
  dispatch(getCostsCategoryRequest());

  try {
    const { incomes, costs } = await getCategoriesApi();
    dispatch(getIncomesCategorySuccess(incomes));
    dispatch(getCostsCategorySuccess(costs));
  } catch (error) {
    dispatch(getIncomesCategoryError(error.message));
    dispatch(getCostsCategoryError(error.message));
  }
};

export const addIncomesCategory = category => async dispatch => {
  dispatch(addIncomesCategoryRequest());
  try {
    const data = await addCategoryApi('incomes', category);
    dispatch(addIncomesCategorySuccess(data));
  } catch (error) {
    dispatch(addIncomesCategoryError(error.message));
  }
};

export const addCostsCategory = category => async dispatch => {
  dispatch(addCostsCategoryRequest());
  try {
    const data = await addCategoryApi('costs', category);
    dispatch(addCostsCategorySuccess(data));
  } catch (error) {
    dispatch(addCostsCategoryError(error.message));
  }
};

import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-3dac9-default-rtdb.firebaseio.com/';

const transformCategoriesObj = categories =>
  categories
    ? Object.entries(categories).map(([id, data]) => ({
        id,
        ...data,
      }))
    : [];

export const getCategoriesApi = async () => {
  const response = await axios.get('categories.json');
  if (response.data === null) return { incomes: [], costs: [] };

  const incomes = transformCategoriesObj(response.data.incomes);

  const costs = transformCategoriesObj(response.data.costs);

  return {
    incomes,
    costs,
  };
};

export const addCategoryApi = async (type, category) => {
  const response = await axios.post(`categories/${type}.json`, category);
  return {
    id: response.data.name,
    ...category,
  };
};

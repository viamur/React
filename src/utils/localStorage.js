const keys = {
  CATEGORIES: 'categories',
  COSTS: 'costs',
  INCOMES: 'incomes',
};

const setDataToLS = (key, data) => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(key, dataJSON);
};

const getDataFromLS = (key, initialValue) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data) ?? initialValue;
};

export default { keys, setDataToLS, getDataFromLS };

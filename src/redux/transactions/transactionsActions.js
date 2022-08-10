const actionTypes = {
  addIncomes: 'transactions/addIncomes',
  addCosts: 'transactions/addCosts',
  removeCosts: 'transactions/removeCosts',
  removeIncomes: 'transactions/removeIncomes',
};

const addIncomes = value => ({
  type: actionTypes.addIncomes,
  payload: value,
});

const addCosts = value => ({
  type: actionTypes.addCosts,
  payload: value,
});

const removeCosts = id => ({
  type: actionTypes.removeCosts,
  payload: id,
});

const removeIncomes = id => ({
  type: actionTypes.removeIncomes,
  payload: id,
});

export { actionTypes, addIncomes, addCosts, removeCosts, removeIncomes };

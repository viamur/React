import { combineReducers } from 'redux';
import { actionTypes } from './transactionsActions';
import isApi from '../../utils/localStorage';

const costsReducer = (state = isApi.getDataFromLS('costs', []), action) => {
  let data;
  switch (action.type) {
    case actionTypes.addCosts:
      data = [...state, action.payload];
      isApi.setDataToLS('costs', data);
      return data;

    case actionTypes.removeCosts:
      data = state.filter(el => el.id !== action.payload);
      isApi.setDataToLS('costs', data);
      return data;
    default:
      return state;
  }
};

const incomesReducer = (state = isApi.getDataFromLS('incomes', []), action) => {
  let data;
  switch (action.type) {
    case actionTypes.addIncomes:
      data = [...state, action.payload];
      isApi.setDataToLS('incomes', data);
      return data;

    case actionTypes.removeIncomes:
      data = state.filter(el => el.id !== action.payload);
      isApi.setDataToLS('incomes', data);
      return data;
    default:
      return state;
  }
};

const transactionReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactionReducer;

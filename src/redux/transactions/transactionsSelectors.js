export const getHasTransactions = state =>
  Boolean(state.transactions.costs.length || state.transactions.incomes.length);

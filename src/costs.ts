// The code started like this
interface ICost {
  amount: number;
}

// After the scope changed it grew to this
enum Currency {
  SEK,
  EUR,
}

export interface ICostWithCurrency {
  amount: number;
  currency: Currency;
}

export function getSavings(oldCost: ICost, newCost: ICost): ICost {
  return {
    amount: oldCost.amount - newCost.amount,
  };
}

// We assume that each cost has the same currency but this can become our next problem
export function getSavingsV2(
  oldCost: ICostWithCurrency,
  newCost: ICostWithCurrency
): ICostWithCurrency {
  return {
    amount: oldCost.amount - newCost.amount,
    currency: newCost.currency,
  };
}

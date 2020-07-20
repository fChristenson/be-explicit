// The code started like this
interface ICost {
  amount: number;
}

export function getSavings(oldCost: ICost, newCost: ICost): ICost {
  return {
    amount: oldCost.amount - newCost.amount,
  };
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

// We assume that each cost has the same currency and this can become our next problem
export function getSavingsV2(
  oldCost: ICostWithCurrency,
  newCost: ICostWithCurrency
): ICostWithCurrency {
  return {
    amount: oldCost.amount - newCost.amount,
    currency: newCost.currency,
  };
}

// A transient model
export interface ICostInSEK extends ICostWithCurrency {
  currency: Currency.SEK;
  // This can be very hard depending on how accurate the conversion needs to be
  // It gets extra tricky if you have to look up the rate from a specific date
  toEUR(): ICostInEUR;
}

// Our persisted model we use to calculate other costs from
export interface ICostInEUR extends ICostWithCurrency {
  currency: Currency.EUR;
}

// We can now trust that our calculations will be correct
export function getSavingsV3(
  oldCost: ICostInEUR,
  newCost: ICostInEUR
): ICostInEUR {
  return {
    amount: oldCost.amount - newCost.amount,
    currency: newCost.currency,
  };
}

import { ICostWithCurrency } from "./costs";

enum Unit {
  SECONDS,
  DAYS,
  MONTHS,
}

interface IRate {
  cost: ICostWithCurrency;
  unit: Unit;
}

export function getSavings(oldRate: IRate, newRate: IRate): IRate {
  return {
    cost: {
      amount: oldRate.cost.amount - newRate.cost.amount,
      currency: newRate.cost.currency,
    },
    unit: newRate.unit,
  };
}

interface IRateV2 {
  cost: ICostWithCurrency;
  unit: Unit.SECONDS;
}

export function getSavingsV2(oldRate: IRateV2, newRate: IRateV2): IRateV2 {
  return {
    cost: {
      amount: oldRate.cost.amount - newRate.cost.amount,
      currency: newRate.cost.currency,
    },
    unit: Unit.SECONDS,
  };
}

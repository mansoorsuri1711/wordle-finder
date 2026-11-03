export type PayPeriod = "annual" | "monthly" | "biweekly" | "weekly" | "daily" | "hourly";

export type SalaryInputs = {
  amount: number;
  period: PayPeriod;
  hoursPerWeek: number;
  weeksPerYear: number;
  hoursPerDay?: number;
};

export type PayBreakdown = {
  hourly: number;
  daily: number;
  weekly: number;
  biweekly: number;
  semiMonthly: number;
  monthly: number;
  annual: number;
  hoursPerYear: number;
};

const DEFAULT_HOURS_PER_DAY = 8;

/** Convert any pay amount into a full frequency breakdown (gross). */
export function calculatePayBreakdown(inputs: SalaryInputs): PayBreakdown | null {
  const { amount, period, hoursPerWeek, weeksPerYear } = inputs;
  const hoursPerDay = inputs.hoursPerDay && inputs.hoursPerDay > 0 ? inputs.hoursPerDay : DEFAULT_HOURS_PER_DAY;

  if (!Number.isFinite(amount) || amount < 0) return null;
  if (!Number.isFinite(hoursPerWeek) || hoursPerWeek <= 0) return null;
  if (!Number.isFinite(weeksPerYear) || weeksPerYear <= 0) return null;

  const hoursPerYear = hoursPerWeek * weeksPerYear;
  if (hoursPerYear <= 0) return null;

  let annual: number;
  switch (period) {
    case "annual":
      annual = amount;
      break;
    case "monthly":
      annual = amount * 12;
      break;
    case "biweekly":
      annual = amount * 26;
      break;
    case "weekly":
      annual = amount * weeksPerYear;
      break;
    case "daily":
      annual = amount * (hoursPerYear / hoursPerDay);
      break;
    case "hourly":
      annual = amount * hoursPerYear;
      break;
    default:
      return null;
  }

  const hourly = annual / hoursPerYear;
  const weekly = hourly * hoursPerWeek;
  const daily = hourly * hoursPerDay;
  const biweekly = weekly * 2;
  const monthly = annual / 12;
  const semiMonthly = annual / 24;

  return {
    hourly,
    daily,
    weekly,
    biweekly,
    semiMonthly,
    monthly,
    annual,
    hoursPerYear,
  };
}

/** Annual salary → hourly using the classic hours×weeks formula. */
export function annualToHourly(annual: number, hoursPerWeek = 40, weeksPerYear = 52): number {
  const result = calculatePayBreakdown({
    amount: annual,
    period: "annual",
    hoursPerWeek,
    weeksPerYear,
  });
  return result?.hourly ?? 0;
}

/** Hourly wage → annual salary. */
export function hourlyToAnnual(hourly: number, hoursPerWeek = 40, weeksPerYear = 52): number {
  const result = calculatePayBreakdown({
    amount: hourly,
    period: "hourly",
    hoursPerWeek,
    weeksPerYear,
  });
  return result?.annual ?? 0;
}

export function formatMoney(value: number, currency = "USD", maximumFractionDigits = 2): string {
  if (!Number.isFinite(value)) return "—";
  const maxDigits = Math.max(0, maximumFractionDigits);
  const minDigits = Math.min(2, maxDigits);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  }).format(value);
}

export function formatNumber(value: number, maximumFractionDigits = 2): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(value);
}

export const EXAMPLE_ANNUAL_RATES = [40000, 50000, 60000, 75000, 80000, 100000, 120000] as const;

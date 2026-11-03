"use client";

import { useMemo, useState } from "react";
import {
  PayPeriod,
  calculatePayBreakdown,
  formatMoney,
  formatNumber,
} from "@/lib/salaryMath";

const PERIODS: { value: PayPeriod; label: string }[] = [
  { value: "annual", label: "Annual" },
  { value: "monthly", label: "Monthly" },
  { value: "biweekly", label: "Biweekly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" },
];

const PRESETS = [
  { label: "Full time", hours: "40", weeks: "52", hint: "40×52" },
  { label: "Part time", hours: "20", weeks: "52", hint: "20×52" },
  { label: "2 wks unpaid", hours: "40", weeks: "50", hint: "40×50" },
] as const;

type Mode = "salary-to-hourly" | "hourly-to-salary";

const fieldClass =
  "calc-input w-full rounded-2xl border border-ink/12 bg-[#F7F8FC] px-4 py-3.5 text-base font-semibold text-ink outline-none transition placeholder:text-ink/30 hover:border-ink/20 focus:border-violet/60 focus:bg-white focus:ring-4 focus:ring-violet/15";

export default function SalaryToHourlyCalculator({
  defaultMode = "salary-to-hourly",
  defaultAmount = 60000,
  id = "calculator",
}: {
  defaultMode?: Mode;
  defaultAmount?: number;
  id?: string;
}) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [amount, setAmount] = useState(String(defaultAmount));
  const [period, setPeriod] = useState<PayPeriod>(
    defaultMode === "hourly-to-salary" ? "hourly" : "annual",
  );
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");
  const [hoursPerDay, setHoursPerDay] = useState("8");

  const parsedAmount = Number(amount.replace(/,/g, ""));
  const parsedHours = Number(hoursPerWeek);
  const parsedWeeks = Number(weeksPerYear);
  const parsedDayHours = Number(hoursPerDay);

  const activePeriod: PayPeriod = mode === "hourly-to-salary" ? "hourly" : period;

  const breakdown = useMemo(
    () =>
      calculatePayBreakdown({
        amount: parsedAmount,
        period: activePeriod,
        hoursPerWeek: parsedHours,
        weeksPerYear: parsedWeeks,
        hoursPerDay: parsedDayHours,
      }),
    [parsedAmount, activePeriod, parsedHours, parsedWeeks, parsedDayHours],
  );

  const switchMode = (next: Mode) => {
    setMode(next);
    if (next === "hourly-to-salary") {
      setPeriod("hourly");
      if (breakdown) setAmount(breakdown.hourly.toFixed(2));
    } else {
      setPeriod("annual");
      if (breakdown) setAmount(Math.round(breakdown.annual).toString());
    }
  };

  const applyPreset = (hours: string, weeks: string) => {
    setHoursPerWeek(hours);
    setWeeksPerYear(weeks);
  };

  const activePreset = PRESETS.find(
    (p) => p.hours === hoursPerWeek && p.weeks === weeksPerYear,
  );

  const resultCards = breakdown
    ? [
        ...(mode === "hourly-to-salary"
          ? [{ label: "Hourly", value: formatMoney(breakdown.hourly) }]
          : []),
        {
          label: `Daily (${formatNumber(parsedDayHours || 8, 0)} hrs)`,
          value: formatMoney(breakdown.daily),
        },
        { label: "Weekly", value: formatMoney(breakdown.weekly) },
        { label: "Biweekly", value: formatMoney(breakdown.biweekly) },
        { label: "Semi-monthly", value: formatMoney(breakdown.semiMonthly) },
        { label: "Monthly", value: formatMoney(breakdown.monthly) },
        ...(mode === "salary-to-hourly"
          ? [{ label: "Annual", value: formatMoney(breakdown.annual, "USD", 0) }]
          : []),
      ]
    : [];

  const primaryValue =
    mode === "salary-to-hourly"
      ? formatMoney(breakdown?.hourly ?? 0)
      : formatMoney(breakdown?.annual ?? 0, "USD", 0);
  const primaryUnit = mode === "salary-to-hourly" ? "per hour" : "per year";

  return (
    <div
      id={id}
      className="calc-shell relative scroll-mt-20 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white p-1 shadow-[0_28px_70px_-40px_rgba(67,56,202,0.35)]"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-violet/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-emerald/10 blur-3xl" />

      <div className="relative rounded-[1.4rem] bg-white p-4 sm:p-6 md:p-7">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-soft">
              Live converter
            </p>
            <p className="mt-1 text-sm text-ink/55">
              Gross pay · updates as you type · no signup
            </p>
          </div>

          <div
            className="inline-flex rounded-2xl border border-ink/10 bg-[#F4F5FB] p-1"
            role="tablist"
            aria-label="Conversion direction"
          >
            {(
              [
                { id: "salary-to-hourly" as const, label: "Salary → Hourly" },
                { id: "hourly-to-salary" as const, label: "Hourly → Salary" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={mode === tab.id}
                onClick={() => switchMode(tab.id)}
                className={`rounded-xl px-3.5 py-2.5 text-sm font-semibold transition duration-200 sm:px-4 ${
                  mode === tab.id
                    ? "bg-violet text-white shadow-[0_10px_24px_-12px_rgba(99,102,241,0.8)]"
                    : "text-ink/60 hover:bg-white hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 flex items-center justify-between text-sm font-medium text-ink/70">
                  <span>{mode === "hourly-to-salary" ? "Hourly wage" : "Pay amount"}</span>
                  <span className="text-xs font-normal text-ink/40">USD</span>
                </span>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-ink/35">
                    $
                  </span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={`${fieldClass} pl-9 text-xl tracking-tight`}
                    aria-label={mode === "hourly-to-salary" ? "Hourly wage" : "Pay amount"}
                  />
                </div>
              </label>

              {mode === "salary-to-hourly" && (
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-ink/70">Pay period</span>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {PERIODS.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => setPeriod(p.value)}
                        className={`rounded-xl border px-2 py-2.5 text-sm font-semibold transition ${
                          period === p.value
                            ? "border-violet/50 bg-violet/10 text-violet-deep"
                            : "border-ink/10 bg-[#F7F8FC] text-ink/60 hover:border-ink/20 hover:text-ink"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </label>
              )}

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink/70">Hours / week</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={1}
                  max={168}
                  step="0.5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(e.target.value)}
                  className={fieldClass}
                  aria-label="Hours per week"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink/70">Weeks / year</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={1}
                  max={52}
                  step="0.5"
                  value={weeksPerYear}
                  onChange={(e) => setWeeksPerYear(e.target.value)}
                  className={fieldClass}
                  aria-label="Weeks per year"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-ink/70">
                  Hours / day
                  <span className="ml-2 font-normal text-ink/40">(for daily total)</span>
                </span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={1}
                  max={24}
                  step="0.5"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(e.target.value)}
                  className={fieldClass}
                  aria-label="Hours per day"
                />
              </label>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-ink/70">Schedule presets</p>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((preset) => {
                  const active = activePreset?.label === preset.label;
                  return (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => applyPreset(preset.hours, preset.weeks)}
                      className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                        active
                          ? "border-emerald/40 bg-emerald/10 text-emerald-deep"
                          : "border-ink/10 bg-[#F7F8FC] text-ink/65 hover:border-ink/20 hover:text-ink"
                      }`}
                    >
                      {preset.label}
                      <span className="ml-1.5 text-ink/35">{preset.hint}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {breakdown ? (
              <div className="flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-emerald/20 bg-gradient-to-b from-[#ECFDF3] via-[#F0FDF4] to-white animate-fade-up shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <div className="border-b border-emerald/15 px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-sm font-medium text-emerald-deep">
                    {mode === "salary-to-hourly"
                      ? "Equivalent hourly rate"
                      : "Equivalent annual salary"}
                  </p>
                  <p
                    key={`${mode}-${primaryValue}`}
                    className="mt-2 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl"
                  >
                    {primaryValue}
                    <span className="ml-2 text-lg font-semibold text-ink/45 sm:text-xl">
                      {primaryUnit}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {formatNumber(parsedHours, 1)} hrs/week × {formatNumber(parsedWeeks, 1)} weeks ={" "}
                    <span className="font-semibold text-ink/85">
                      {formatNumber(breakdown.hoursPerYear, 0)} hours/year
                    </span>
                    <span className="text-ink/40"> · before taxes</span>
                  </p>
                </div>

                <div className="grid flex-1 grid-cols-2 gap-px bg-emerald/10">
                  {resultCards.map((card) => (
                    <div key={card.label} className="bg-white/90 px-4 py-3.5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                        {card.label}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="border-t border-emerald/15 px-5 py-3 text-xs leading-relaxed text-ink/45 sm:px-6">
                  {formatMoney(breakdown.annual, "USD", 0)} ÷ ({formatNumber(parsedHours, 0)} ×{" "}
                  {formatNumber(parsedWeeks, 0)}) = {formatMoney(breakdown.hourly)}/hr · gross estimate
                  only
                </p>
              </div>
            ) : (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-[1.35rem] border border-dashed border-orange/40 bg-orange/5 px-6 text-center">
                <p className="font-display text-lg font-semibold text-orange-deep">
                  Enter valid numbers
                </p>
                <p className="mt-2 max-w-xs text-sm text-ink/55">
                  Add a pay amount plus hours/week and weeks/year to see your conversion.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

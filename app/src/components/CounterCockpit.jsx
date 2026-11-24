import { stepOptions } from "../data/counter";

export default function CounterCockpit({
  count,
  step,
  progress,
  hex,
  rate,
  delta,
  onIncrement,
  onDecrement,
  onReset,
  onStepChange,
}) {
  return (
    <div className="w-full bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(15,23,42,0.04),0_6px_20px_0_rgba(15,23,42,0.03)] border border-outline-variant/30 overflow-hidden relative backdrop-blur-sm">
      {/* Top machined header strip */}
      <div className="px-8 py-3 bg-surface-container-low/60 flex items-center justify-between border-b border-outline-variant/20">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">
            Channel A // Live Register
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-label-sm text-[10px] text-outline px-1 py-0.5 rounded bg-surface-container-lowest">
            {rate} ops/sec
          </span>
          <span className="font-label-sm text-[10px] text-outline">
            HEX: <span className="text-on-surface-variant font-mono">{hex}</span>
          </span>
        </div>
      </div>

      {/* Counter center stage */}
      <div className="px-8 pt-8 pb-5 flex flex-col items-center justify-center relative select-none">
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
          <svg
            className="w-72 h-72 text-surface-container"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="46" strokeDasharray="2 3" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="38" strokeWidth="0.5" />
          </svg>
        </div>

        <span className="font-label-sm text-[10px] text-outline tracking-widest uppercase mb-1">
          Current Cumulative Tally
        </span>

        <div className="relative py-1 px-8 flex items-baseline justify-center">
          <span
            className="font-headline-xl text-[84px] leading-none font-bold tracking-tight text-on-surface transition-transform duration-100 tabular-nums"
            style={{ transform: delta !== 0 ? "scale(1.04)" : "scale(1)" }}
          >
            {count}
          </span>
          {delta !== 0 && (
            <span
              className={
                "absolute -right-2 top-2 font-label-md text-[11px] px-1.5 py-0.5 rounded shadow-sm font-mono font-medium " +
                (delta > 0
                  ? "bg-primary text-on-primary"
                  : "bg-secondary text-on-secondary")
              }
            >
              {delta > 0 ? `+${delta}` : `${delta}`}
            </span>
          )}
        </div>

        {/* Target progress meter */}
        <div className="w-full max-w-sm mt-3 flex flex-col gap-1">
          <div className="flex justify-between items-center text-outline font-label-sm text-[10px]">
            <span>Cycle Benchmark</span>
            <span className="text-on-surface-variant font-mono">
              {progress}% (Goal 100)
            </span>
          </div>
          <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Primary action bay */}
      <div className="p-8 pt-2 bg-surface-container-lowest flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onDecrement}
            className="group relative flex items-center justify-center gap-2 py-5 px-6 rounded-lg bg-surface-container-low hover:bg-surface-container active:translate-y-0.5 transition-all duration-75 shadow-sm text-on-surface"
          >
            <span className="material-symbols-outlined text-[26px] text-on-surface-variant group-hover:text-on-surface transition-colors">
              remove
            </span>
            <span className="font-headline-sm text-[18px] font-semibold select-none">
              Minus
            </span>
            <span className="font-label-sm text-[10px] text-outline ml-1 font-mono">
              [-{step}]
            </span>
          </button>

          <button
            onClick={onIncrement}
            className="group relative flex items-center justify-center gap-2 py-5 px-6 rounded-lg bg-primary hover:bg-primary/95 text-on-primary active:translate-y-0.5 shadow-[0_4px_14px_rgba(69,30,219,0.25)] transition-all duration-75"
          >
            <span className="material-symbols-outlined text-[26px]">add</span>
            <span className="font-headline-sm text-[18px] font-semibold select-none">
              Count
            </span>
            <span className="font-label-sm text-[10px] text-primary-fixed-dim ml-1 font-mono">
              [+{step}]
            </span>
          </button>
        </div>

        {/* Secondary toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-outline-variant/15">
          <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg">
            <span className="font-label-sm text-[10px] text-outline px-1 select-none">
              STEP:
            </span>
            {stepOptions.map((value) => {
              const active = value === step;
              return (
                <button
                  key={value}
                  onClick={() => onStepChange(value)}
                  className={
                    active
                      ? "px-2.5 py-1 rounded font-label-md text-[11px] transition-all bg-surface-container-lowest text-on-surface shadow-[0_1px_2px_rgba(0,0,0,0.06)] font-semibold"
                      : "px-2.5 py-1 rounded font-label-md text-[11px] text-on-surface-variant hover:text-on-surface transition-all"
                  }
                >
                  {value}
                </button>
              );
            })}
          </div>

          <button
            onClick={onReset}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container/40 active:translate-y-0.5 transition-all text-[12px]"
          >
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            <span>Reset State</span>
          </button>
        </div>
      </div>
    </div>
  );
}

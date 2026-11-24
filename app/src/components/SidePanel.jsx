import { auditSession, targetCap } from "../data/counter";

const dotColor = {
  add: "bg-primary",
  subtract: "bg-secondary",
  init: "bg-primary-fixed-dim",
};

export default function SidePanel({ operations, peak, activity, onClear }) {
  return (
    <div className="lg:col-span-4 flex flex-col gap-3">
      {/* Visual context card */}
      <div className="w-full bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col">
        <div className="relative h-28 w-full overflow-hidden bg-surface-container">
          <img
            className="w-full h-full object-cover"
            alt="High precision laboratory measurement apparatus on a clean stone workbench"
            src="/audit-session.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
          <div className="absolute top-2.5 left-3 px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-md font-label-sm text-[10px] text-on-surface flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>AUDIT SESSION {auditSession}</span>
          </div>
        </div>
        <div className="p-3 flex justify-between items-center bg-surface-container-lowest">
          <div>
            <p className="font-label-sm text-[10px] text-outline uppercase">Active Rate</p>
            <p className="font-headline-sm text-[18px] font-semibold text-on-surface font-mono">
              {operations} Actions
            </p>
          </div>
          <div className="text-right">
            <p className="font-label-sm text-[10px] text-outline uppercase">Session Peak</p>
            <p className="font-headline-sm text-[18px] font-semibold text-on-surface font-mono">
              {peak}
            </p>
          </div>
        </div>
      </div>

      {/* Activity ledger */}
      <div className="w-full bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-3 shadow-sm flex flex-col flex-1 min-h-[310px]">
        <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 mb-2">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px] text-outline">history</span>
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface font-semibold">
              Activity Ledger
            </span>
          </div>
          <button
            onClick={onClear}
            className="font-label-sm text-[10px] text-outline hover:text-on-surface transition-colors"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-col gap-1.5 overflow-hidden font-label-sm text-[10px]">
          {activity.map((entry, i) => (
            <div
              key={entry.id}
              className={
                "flex items-center justify-between p-2 rounded border border-outline-variant/10 " +
                (i === 0 ? "bg-surface-container-low/70" : "bg-surface-container-low/40")
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    "w-1.5 h-1.5 rounded-full " + (dotColor[entry.kind] || "bg-outline")
                  }
                />
                <span
                  className={
                    "font-mono font-medium " +
                    (entry.kind === "init" ? "text-on-surface-variant" : "text-on-surface")
                  }
                >
                  {entry.label}
                </span>
              </div>
              <span className="text-outline font-mono">{entry.time}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-2 border-t border-outline-variant/15 flex items-center justify-between text-outline font-label-sm text-[10px]">
          <span>Target Cap: {targetCap}</span>
          <span className="flex items-center gap-1 text-primary">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
            Synchronized
          </span>
        </div>
      </div>
    </div>
  );
}

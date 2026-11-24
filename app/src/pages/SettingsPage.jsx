import { Link } from "react-router-dom";
import { stepOptions, targetCap } from "../data/counter";

export default function SettingsPage() {
  return (
    <div className="flex flex-col w-full py-8 items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-headline-lg text-[28px] font-semibold tracking-tight text-on-surface">
              Settings
            </h1>
            <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
              Preferences for the counter instrument.
            </p>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all text-[12px]"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Counter
          </Link>
        </div>

        <div className="w-full bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-body-md text-[14px] text-on-surface">Target Cap</span>
            <span className="font-label-md text-[11px] font-mono text-on-surface-variant">
              {targetCap}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-outline-variant/15 pt-4">
            <span className="font-body-md text-[14px] text-on-surface">Quick Steps</span>
            <span className="font-label-md text-[11px] font-mono text-on-surface-variant">
              {stepOptions.join(" · ")}
            </span>
          </div>
          <p className="font-body-sm text-[12px] text-on-surface-variant border-t border-outline-variant/15 pt-4">
            This is a placeholder screen. It matches the app's style so you can
            replace it with your own content later.
          </p>
        </div>
      </div>
    </div>
  );
}

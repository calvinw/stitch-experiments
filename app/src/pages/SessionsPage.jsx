import { Link } from "react-router-dom";
import { auditSession, initialActivity } from "../data/counter";

export default function SessionsPage() {
  return (
    <div className="flex flex-col w-full py-8 items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-headline-lg text-[28px] font-semibold tracking-tight text-on-surface">
              Sessions
            </h1>
            <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
              Past counting sessions recorded on this device.
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

        <div className="w-full bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-3 shadow-sm">
          <div className="flex items-center justify-between p-2 rounded bg-surface-container-low/60 border border-outline-variant/10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-label-md text-[11px] font-mono text-on-surface">
                Session {auditSession}
              </span>
            </div>
            <span className="font-label-sm text-[10px] text-outline font-mono">
              {initialActivity[0].time}
            </span>
          </div>
          <p className="font-body-sm text-[12px] text-on-surface-variant px-2 pt-3">
            This is a placeholder screen. It matches the app's style so you can
            replace it with your own content later.
          </p>
        </div>
      </div>
    </div>
  );
}

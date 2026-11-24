import { footerInfo } from "../data/counter";

export default function Footer() {
  return (
    <footer className="w-full bg-surface py-3 mt-auto shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between text-on-surface-variant font-label-sm text-[10px]">
        <div className="flex items-center gap-3">
          <span className="text-outline">{footerInfo.version}</span>
          <span>{footerInfo.tagline}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <kbd className="bg-surface-container-low px-1 py-0.5 rounded text-on-surface">R</kbd>
            Reset
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-surface-container-low px-1 py-0.5 rounded text-on-surface">↑/↓</kbd>
            Step Size
          </span>
        </div>
      </div>
    </footer>
  );
}

import { Link, useLocation } from "react-router-dom";
import { appName, appSection } from "../data/counter";

const navItems = [
  { to: "/", label: "Counter" },
  { to: "/sessions", label: "Sessions" },
  { to: "/settings", label: "Settings" },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-14 max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-[18px] font-semibold tracking-tight text-on-surface select-none">
              {appName}
            </span>
            <span className="font-label-md text-[11px] text-outline select-none">/</span>
            <span className="font-headline-sm text-[18px] font-semibold tracking-tight text-on-surface-variant select-none">
              {appSection}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded">
            <span className="font-label-sm text-[10px] text-outline uppercase tracking-wider">
              Shortcut:
            </span>
            <kbd className="font-label-sm text-[10px] text-on-surface-variant bg-surface-container-lowest px-1 py-0.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              Space
            </kbd>
            <span className="font-label-sm text-[10px] text-outline">to count</span>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  active
                    ? "px-4 py-1.5 bg-primary-container text-on-primary-container rounded font-medium transition-colors"
                    : "px-4 py-1.5 rounded text-[12px] text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

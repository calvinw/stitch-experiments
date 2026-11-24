const hints = [
  { keys: ["Space", "or", "↑"], label: "Increment" },
  { keys: ["↓"], label: "Decrement" },
  { keys: ["R"], label: "Zero Reset" },
  { keys: ["1-4"], label: "Quick Step" },
];

export default function KeyboardHintDeck() {
  return (
    <div className="w-full bg-surface-container-low/70 rounded-lg p-3 flex flex-wrap items-center justify-between gap-3 border border-outline-variant/20 text-on-surface-variant">
      <div className="flex items-center gap-5 flex-wrap font-label-sm text-[10px]">
        {hints.map((hint) => (
          <div key={hint.label} className="flex items-center gap-1">
            {hint.keys.map((key, i) =>
              key === "or" ? (
                <span key={i} className="text-outline">
                  or
                </span>
              ) : (
                <kbd
                  key={i}
                  className="px-1.5 py-0.5 bg-surface-container-lowest rounded shadow-sm text-on-surface font-mono font-medium"
                >
                  {key}
                </kbd>
              )
            )}
            <span className="text-on-surface-variant">{hint.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[16px] text-outline">keyboard</span>
        <span className="font-label-sm text-[10px] text-outline">Hardware input active</span>
      </div>
    </div>
  );
}

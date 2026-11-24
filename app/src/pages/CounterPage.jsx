import { useCallback, useEffect, useRef, useState } from "react";
import CounterCockpit from "../components/CounterCockpit";
import KeyboardHintDeck from "../components/KeyboardHintDeck";
import SidePanel from "../components/SidePanel";
import {
  initialActivity,
  initialCount,
  initialOperations,
  initialPeak,
  initialStep,
  stepOptions,
} from "../data/counter";

function formatTime(d) {
  return d.toTimeString().split(" ")[0];
}

export default function CounterPage() {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);
  const [operations, setOperations] = useState(initialOperations);
  const [peak, setPeak] = useState(initialPeak);
  const [activity, setActivity] = useState(initialActivity);
  const [delta, setDelta] = useState(0);
  const [rate, setRate] = useState("0.0");

  const idRef = useRef(initialActivity.length + 1);
  const deltaTimer = useRef(null);
  const clickTimes = useRef([]);

  const updateDelta = useCallback((value) => {
    setDelta(value);
    clearTimeout(deltaTimer.current);
    deltaTimer.current = setTimeout(() => setDelta(0), 450);
  }, []);

  const logActivity = useCallback((label, kind) => {
    setOperations((n) => n + 1);
    const now = Date.now();
    clickTimes.current = clickTimes.current.filter((time) => now - time <= 2000);
    clickTimes.current.push(now);
    setRate((clickTimes.current.length / 2).toFixed(1));
    setActivity((list) => {
      const entry = {
        id: idRef.current++,
        label,
        kind,
        time: formatTime(new Date()),
      };
      return [entry, ...list].slice(0, 5);
    });
  }, []);

  const increment = useCallback(() => {
    setCount((c) => {
      const next = c + step;
      setPeak((p) => Math.max(p, next));
      return next;
    });
    logActivity(`+${step} step`, "add");
    updateDelta(step);
  }, [step, logActivity, updateDelta]);

  const decrement = useCallback(() => {
    setCount((c) => Math.max(0, c - step));
    logActivity(`-${step} step`, "subtract");
    updateDelta(-step);
  }, [step, logActivity, updateDelta]);

  const reset = useCallback(() => {
    logActivity(`Zero reset (was ${count})`, "subtract");
    setCount(0);
    updateDelta(0);
  }, [count, logActivity, updateDelta]);

  const clearLog = useCallback(() => {
    setActivity([
      {
        id: idRef.current++,
        label: "Log purged",
        kind: "init",
        time: formatTime(new Date()),
      },
    ]);
  }, []);

  // Keyboard shortcuts: Space/↑ count, ↓ minus, R reset, 1-4 pick step.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      if (e.code === "Space") {
        e.preventDefault();
        increment();
      } else if (e.code === "ArrowUp") {
        e.preventDefault();
        increment();
      } else if (e.code === "ArrowDown") {
        e.preventDefault();
        decrement();
      } else if (e.code === "KeyR") {
        e.preventDefault();
        reset();
      } else if (["Digit1", "Digit2", "Digit3", "Digit4"].includes(e.code)) {
        const idx = parseInt(e.code.replace("Digit", ""), 10) - 1;
        if (stepOptions[idx]) setStep(stepOptions[idx]);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [increment, decrement, reset]);

  const hex = "0x" + (count >>> 0).toString(16).toUpperCase().padStart(4, "0");
  const progress = Math.min(Math.max(Math.round((count / 100) * 100), 0), 100);

  return (
    <div className="flex flex-col w-full py-8 items-center justify-center relative">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[620px] h-[360px] bg-gradient-to-b from-primary-fixed/30 via-surface-container-high/40 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 flex flex-col gap-5">
          <CounterCockpit
            count={count}
            step={step}
            progress={progress}
            hex={hex}
            rate={rate}
            delta={delta}
            onIncrement={increment}
            onDecrement={decrement}
            onReset={reset}
            onStepChange={setStep}
          />
          <KeyboardHintDeck />
        </div>

        <SidePanel
          operations={operations}
          peak={peak}
          activity={activity}
          onClear={clearLog}
        />
      </div>
    </div>
  );
}

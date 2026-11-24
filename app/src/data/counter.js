// All the made-up data and labels for the counter app live here,
// so you can change them in one place.

export const appName = "Tally";
export const appSection = "Counter";

export const stepOptions = [1, 5, 10, 100];

export const initialCount = 42;
export const initialStep = 1;
export const initialOperations = 14;
export const initialPeak = 50;

export const targetCap = 100;
export const auditSession = "#882";

export const initialActivity = [
  { id: 1, label: "+1 step", kind: "add", time: "10:42:01 AM" },
  { id: 2, label: "+5 step", kind: "add", time: "10:41:48 AM" },
  { id: 3, label: "-1 step", kind: "subtract", time: "10:40:12 AM" },
  { id: 4, label: "Session initialized", kind: "init", time: "10:39:00 AM" },
];

export const footerInfo = {
  version: "v1.0.4-opt",
  tagline: "Precision Operational Utility",
};

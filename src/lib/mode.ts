import { create } from "zustand";

export type StudioMode = "literary" | "childrens";

type ModeState = {
  mode: StudioMode;
  setMode: (mode: StudioMode) => void;
};

function readStored(): StudioMode {
  if (typeof window === "undefined") return "literary";
  const value = window.localStorage.getItem("vbs-mode");
  return value === "childrens" ? "childrens" : "literary";
}

export const useMode = create<ModeState>((set) => ({
  mode: "literary",
  setMode: (mode) => {
    set({ mode });
    if (typeof window !== "undefined") {
      window.localStorage.setItem("vbs-mode", mode);
    }
  },
}));

export function hydrateMode() {
  useMode.getState().setMode(readStored());
}

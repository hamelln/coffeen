import { atom } from "recoil";

type TActive = 1 | 2 | 3 | null;

export const isMobileOpen = atom<boolean>({
  key: "isMobileOpen",
  default: false,
});

export const isVisibleState = atom<boolean>({
  key: "isVisibleState",
  default: true,
});

export const headerTabActive = atom<TActive>({
  key: "headerTabActive",
  default: null,
});

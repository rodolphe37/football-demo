import { atom } from "recoil";

export const positionFilterStateAtom = atom({
  key: "positionFilterStateAtom",
  default: {
    FWD: [null, null, null],
    MID: [null, null, null],
    DEF: [null, null, null, null],
    GKC: [null],
  },
});

import { selector } from "recoil";
import { allPlayersStateAtom } from "../atoms/allPlayersStateAtom";
import { currentPositionAtom } from "../atoms/currentPositionAtom";

export const filteredPlayerSelector = selector({
  key: "filteredPlayerSelector",
  get: ({ get }) => {
    const playersFilter = get(allPlayersStateAtom);
    const filters = get(currentPositionAtom);
    return playersFilter.filter((player) => filters.includes(player.position));
  },
});

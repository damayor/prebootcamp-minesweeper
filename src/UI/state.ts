import { useEffect, useState } from "react";
import { CellType, GameStatusType } from "../commonTypes";
import { cellsHeight, totalMines } from "../configValues";

type Sub = {
  id: number;
  exec: (gs: GameState) => void;
};

export type GameState = {
  initCells: CellType[];
  status: GameStatusType;
};

const initialize = (): GameState => {
  return {
    initCells: Array.from({ length: 16 }, (_, i) => {
      // console.log("initing celds");
      return {
        position: [Math.floor(i / cellsHeight) + 1, (i % cellsHeight) + 1],
        isMine: Math.random() < totalMines / 16
      };
    }),
    status: "default"
  };
};

const State = (() => {
  let subs = [] as Sub[];
  let val = initialize();
  let id = 0;

  return {
    set: (gs: GameState) => {
      val = gs;
      subs.forEach(({ exec }) => exec(gs));
    },
    get: () => val,
    subscribe: (fn: (gs: GameState) => void) => {
      const cId = id++;
      subs.push({ exec: fn, id: cId });
      return () => {
        subs = subs.filter(({ id }) => id !== cId);
      };
    }
  };
})();

export const setValue = (gs: GameState) => State.set(gs);

export const useGlobalState = () => {
  const [val, setVal] = useState(State.get());

  useEffect(() => State.subscribe(setVal), []);

  return val;
};

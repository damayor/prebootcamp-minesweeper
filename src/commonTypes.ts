export type CellType = {
  position?: [number, number];
  adjacentMines?: number;
  isMine?: boolean;
  isFlagMark?: boolean;
  isShownProp?: boolean;
  handleClickGrid?: () => void;
  handleMouseDownGrid?: () => void;
  handleGameOver?: () => void;
  handleShow?: (x: number, y: number) => void;
  handleSetFlag?: (x: number, y: number) => void;
};

export type GameStatusType = "default" | "doubtful" | "lost" | "won";

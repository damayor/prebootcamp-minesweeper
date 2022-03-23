import { useGlobalState } from "./state";
import * as Events from "../events";
import "./styles.css";

export default function App() {
  const val = useGlobalState();
  console.log("val", val);

  const handleClickCell = () => {
    console.log("grid clickeada");
  };

  const handleMouseDownGrid = () => {
    console.log("doubtfull");
  };

  return (
    <div className="App">
      <section className="game-board">
        <div className="controller">
          <div className="mines-counter">010</div>
          <div className={`status-button status-button--default-game`}></div>
          <div className="score">345</div>
        </div>
        <div className="grid">
          {val.initCells.map((cell, index) => (
            // <div key={`cell-${index}`} className={`cell cell--mines-${1}`}>
            //   {1}
            // </div>
            <div
              key={`cell-${index}`}
              className="cell"
              onMouseDown={handleMouseDownGrid}
              onClick={handleClickCell}
            ></div>
          ))}
          {/* <div className="cell cell--mines-1">1</div>
          <div className="cell cell--mines-2">2</div>
          <div className="cell cell--mines-3">3</div>
          <div className="cell cell--mines-4">4</div>
          <div className="cell cell--mines-5">5</div>
          <div className="cell cell--mines-6">6</div>
          <div className="cell cell--mines-7">7</div>
          <div className="cell cell--mines-8">8</div>
          <div className="cell cell__flag"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell cell__mine cell__mine--clicked"></div>
          <div className="cell cell__mine cell__mine--shown"></div>
          <div className="cell cell__mine cell__mine--wrong"></div>
          <div className="cell"></div> */}
        </div>
      </section>
    </div>
  );
}

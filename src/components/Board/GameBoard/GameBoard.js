import TilesRow from "../TilesRow/TilesRow";
import "./GameBoard.css";

const GameBoard = ({ nrows, ncols }) => {
  return (
    <div className="GameBoard">
      <TilesRow />
      <TilesRow />
      <TilesRow />
      <TilesRow />
      <TilesRow />
      <TilesRow />
    </div>
  );
};

export default GameBoard;

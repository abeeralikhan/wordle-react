import "./Tile.css";
// status --> idle, active, correct, partial-correct, incorrect
const POSSIBLE_CLASSES = [
  "idle",
  "active",
  "correct",
  "partial-correct",
  "incorrect",
];

const getGuessClass = (guessStatus, word) => {
  if (!word) return "idle";

  // Have word but guess status is not clear
  if (!guessStatus) return "active";

  // Have both word & guess status
  return validateGuessStatus(guessStatus);
};

const validateGuessStatus = (guessStatus) => {
  return POSSIBLE_CLASSES.includes ? guessStatus : "idle";
};

const Tile = ({ word = "", guessStatus }) => {
  const classes = `Tile ${getGuessClass(guessStatus, word)}`;
  return (
    <div className={classes}>
      <span>{word.toUpperCase()}</span>
    </div>
  );
};

export default Tile;

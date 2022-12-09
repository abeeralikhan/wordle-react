import "./Tile.css";
// status --> idle, active, correct, partial-correct, incorrect
const POSSIBLE_CLASSES = [
  "idle",
  "active",
  "correct",
  "partial-correct",
  "incorrect",
];

const getGuessClass = (guessStatus, letter) => {
  if (!letter) return "idle";

  // Have letter but guess status is not clear
  if (!guessStatus) return "active";

  // Have both letter & guess status
  return validateGuessStatus(guessStatus);
};

const validateGuessStatus = (guessStatus) => {
  return POSSIBLE_CLASSES.includes ? guessStatus : "idle";
};

const Tile = ({ letter = "", guessStatus }) => {
  const classes = `Tile ${getGuessClass(guessStatus, letter)}`;
  return (
    <div className={classes}>
      <span>{letter.toUpperCase()}</span>
    </div>
  );
};

export default Tile;

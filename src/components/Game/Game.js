import { useState, useEffect } from "react";
import GameBoard from "../Board/GameBoard/GameBoard";
import "./Game.css";

const Game = ({ nrows = 6, ncols = 5 }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [theWord, setTheWord] = useState("abeer");
  const [activeColumn, setActiveColumn] = useState(0);
  const [activeRow, setActiveRow] = useState(0);
  const [activeWord, setActiveWord] = useState([]); // a list of objects

  // handle keydown
  // handle backspace
  // handle enter

  const handleKeyDown = (event) => {
    if (!event.repeat) {
      if (event.key === "Backspace") {
        handleBackspace();
      } else if (event.key === "Enter") {
        handleEnter();
      } else if (isValidCharacter(event.key)) {
        handleNewLetter(event.key.toLowerCase());
      }
    }
  };

  const handleBackspace = () => {
    console.log("Backspace is pressed");
  };

  const handleEnter = () => {
    console.log("Enter is pressed");
  };

  const handleNewLetter = (letter) => {
    console.log(letter);
  };

  const isValidCharacter = (character) => {
    return "abcdefghijklmnopqrstuvwxyz".includes(character.toLowerCase());
  };

  return (
    <div className="Game">
      <GameBoard nrows={nrows} ncols={ncols} />
    </div>
  );
};

export default Game;

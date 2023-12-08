import React from "react";
import "./game.css";
import { useState } from "react";

export default function Game() {
  const [selected, setSelected] = useState([]);
  const [isRemoval, setisRemoval] = useState(false);
  const gameArray = [1, 1, 1, 1, 0, 1, 1, 1, 1];
  const handleClick = (index) => {
    if (!selected.includes(index)) {
      const newSelect = [...selected];
      newSelect.push(index);

      setSelected(() => {
        return newSelect;
      });
    } else {
      const newSelect = [...selected].filter((elm) => {
        if (elm !== index) {
          return elm;
        }
      });
      setSelected(newSelect);
    }
    selected.length === 7 ? isCompletelyFilled() : console.log(selected);
  };
  const isCompletelyFilled = () => {
    let id;

    id = setInterval(() => {
      setSelected((prev) => {
        let newSeleted = prev.slice();
        newSeleted.pop();
        !newSeleted.length && clearInterval(id);

        return newSeleted;
      });
    }, 400);
  };
  return (
    <div className="root">
      {gameArray.map((elm, index) => {
        return (
          <>
            {elm ? (
              <div
                key={index}
                className={
                  selected.includes(index) ? "selected" : "notselected"
                }
                onClick={() => handleClick(index)}
              ></div>
            ) : (
              <span></span>
            )}
          </>
        );
      })}
    </div>
  );
}

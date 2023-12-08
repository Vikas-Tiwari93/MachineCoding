import { useState } from "react";
import "./like.css";
export default function LikeButton({ onClick }) {
  const [isClicked, setIsClicked] = useState();
  const [isloading, setIsLOding] = useState();
  console.log(isClicked);
  return (
    <button
      className={!isClicked ? "buttonlike" : "buttonSelected"}
      onClick={() => onClick(setIsClicked, setIsLOding)}
    >
      Like me {isloading && <span>....</span>}
    </button>
  );
}

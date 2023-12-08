import { useEffect, useState } from "react";
import "./progress.css";
import Progressbar from "./Progressbar";

export default function ProgressParent() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setValue((prev) => {
        let newVal = prev;
        console.log({ newVal });
        newVal = newVal + 1;
        newVal === 100 && clearInterval(id);
        return newVal;
      });
    }, 100);

    () => clearInterval(id);
  }, []);
  return (
    <div>
      <Progressbar value={value} />
    </div>
  );
}

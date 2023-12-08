import React from "react";
import { useState } from "react";

export default function ParentHead({ renderArr }) {
  const [value, setValue] = useState(renderArr[0].name);

  return (
    <div>
      <div>
        {renderArr.map((elm) => {
          return (
            <span key={elm.name} onClick={() => setValue(elm.name)}>
              {elm.name}
            </span>
          );
        })}
      </div>
      <div>
        {renderArr.map((elm) => {
          if (value === elm.name) {
            return <span key={elm.name}>{elm.render()}</span>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

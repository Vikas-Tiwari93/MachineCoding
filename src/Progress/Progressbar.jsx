import React from "react";

export default function Progressbar({ value }) {
  return (
    <div className="progressroot">
      <div className="progressbar" style={{ width: `${value}%` }}>
        <span className={value < 50 ? "percentage" : "percentagefiftyplus"}>
          {value}
        </span>
      </div>
    </div>
  );
}

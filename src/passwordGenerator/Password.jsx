import React from "react";
import "./pass.css";
import { useState } from "react";
import usePasswordGenerate from "./usePassword";
export default function usePassword() {
  const [value, setValue] = useState(3);
  const [checkboxes, setCheckboxex] = useState([
    {
      name: "Alphabets",
      title: "Alphabets",
      checked: true,
      value: "abcdefghijklmnopqrstuvwxyz",
    },
    {
      name: "Numbers",
      title: "Numbers",
      checked: true,
      value: "1234567890",
    },
    {
      name: "Specials",
      title: "Special Char",
      checked: true,
      value: "!@#$%^&*()_+",
    },
    {
      name: "Capitals",
      title: "Capital Alphabets",
      checked: true,
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
  ]);

  const { handleGenerate, password } = usePasswordGenerate(checkboxes, value);
  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    let newCheckboxes = [...checkboxes];
    newCheckboxes.map((elm) => {
      if (elm.name === name) {
        elm.checked = !elm.checked;
      }
      return elm;
    });
    setCheckboxex(newCheckboxes);
  };
  return (
    <div className="passwordroot">
      <div className="showpasswordroot">
        <span className="showpassword">{password || ""}</span> <span>Copy</span>
      </div>
      <div className="showpasswordroot">
        <input
          type="range"
          min={4}
          max={8}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <span>Strength: {value}</span>
      </div>
      <div className="passwordoptionsroot">
        <div>Must Include</div>
        <div className="passwordoptions">
          {checkboxes.map((elm) => {
            return (
              <div key={elm.name}>
                <input
                  type="checkbox"
                  name={elm.name}
                  checked={elm.checked}
                  onChange={handleCheckboxChange}
                />
                {elm.name}
              </div>
            );
          })}
        </div>
      </div>

      <button className="button" onClick={handleGenerate}>
        Generate password
      </button>
    </div>
  );
}

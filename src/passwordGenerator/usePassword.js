import { useState } from "react";

export default function usePasswordGenerate(checkboxes, value) {
  const [password, setPassword] = useState("");
  function handleGenerate() {
    let charSet = "";
    let password = "";
    checkboxes.forEach((elm) => {
      if (elm.checked) {
        charSet = charSet + elm.value;
      }
    });

    for (let i = 0; i < value; i++) {
      let index = Math.floor(Math.random() * charSet.length);
      password = password + charSet[index];
    }

    setPassword(password);
  }
  return { handleGenerate, password };
}

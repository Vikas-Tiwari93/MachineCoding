import { useState } from "react";
import OTPComponent from "./OTPComponent";
import "./otp.css";
export default function Parent() {
  const [num, setNum] = useState("5");
  const [separator, setSeparator] = useState("/");
  const [placeholder, setPlaceholder] = useState();
  const [valueOTP, setValueOTP] = useState("1234");
  const [type, setType] = useState();
  return (
    <div className="rootElm">
      <div className="options">
        <div>React-OTP-Input</div>
        <div className="inputsProps">
          <p>
            <span>numInputs</span>
            <div>
              <input
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
            </div>
          </p>
          <p>
            <span>separator</span>
            <div>
              <input
                type="text"
                value={separator}
                onChange={(e) => setSeparator(e.target.value)}
              />
            </div>
          </p>
          <p>
            <span>Value</span>
            <div>
              <input
                maxLength="4"
                type="number"
                value={valueOTP}
                onChange={(e) => setValueOTP(e.target.value)}
              />
            </div>
          </p>
          <p>
            <span>Place holder</span>
            <div>
              <input
                type="text"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
              />
            </div>
          </p>
          <p>
            <span>Input Type</span>
            <div>
              <select
                name=""
                id=""
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="text">text</option>
                <option value="number">number</option>
                <option value="password">password</option>
                <option value="tel">tel</option>
              </select>
            </div>
          </p>
        </div>
        <div>Documentation and Source</div>
      </div>
      <div className="OTPspace">
        <OTPComponent
          num={num}
          separator={separator}
          placeholder={placeholder}
          valueOTP={valueOTP}
          type={type}
        />
      </div>
    </div>
  );
}

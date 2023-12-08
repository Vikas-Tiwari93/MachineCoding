import { useRef, useState } from "react";

export default function OTPComponent({
  num,
  separator,
  placeholder,
  valueOTP,
  type,
}) {
  let inputref = useRef([]);

  const valueInputs = valueOTP.length === Number(num) ? valueOTP.split("") : [];
  let renderArray = new Array(Number(num)).fill(" ");
  console.log(valueInputs);
  const handleChange = (e, i) => {
    let otpValue = e.target.value;
    if (otpValue && i < inputref.current.length - 1) {
      inputref.current[i + 1].focus();
    }
    if (otpValue && i === inputref.current.length - 1) {
      inputref.current[i].value = e.target.value[0];
    } else if (!otpValue && i > 0) {
      inputref.current[i - 1].focus();
    }
  };
  const handleKeydown = (e, i) => {
    if (e.key === "Backspace" && i > 0) {
      inputref.current[i].value = "";
      inputref.current[i - 1].focus();
      inputref.current[i - 1].value = "";
    }
  };
  const clearFn = () => {
    inputref.current.forEach((elm) => {
      elm.value = "";
    });
    inputref.current[0].focus();
  };
  const alertFn = () => {
    let string = "";
    inputref.current.forEach((elm) => {
      string = string + elm.value;
    });

    alert(string);
  };

  return (
    <div className="Otpcard">
      <div>Enter verification code</div>
      <div className="OTPSpace">
        {renderArray.map((elm, index) => {
          if (index < Number(num - 1)) {
            return (
              <span key={index}>
                <input
                  maxLength="1"
                  max={"9"}
                  className="OTPinputbox"
                  type={type}
                  defaultValue={valueInputs[index]}
                  placeholder={placeholder}
                  ref={(el) => (inputref.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => {
                    handleKeydown(e, index);
                  }}
                />
                <span>{separator}</span>
              </span>
            );
          }
          return (
            <span key={index}>
              <input
                maxLength="1"
                type={type}
                className="OTPinputbox"
                defaultValue={valueInputs[index]}
                placeholder={placeholder}
                ref={(el) => (inputref.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => {
                  handleKeydown(e, index);
                }}
              />
            </span>
          );
        })}
      </div>
      <div className="OTPbuttons">
        <button onClick={clearFn}>Clear</button>
        <button onClick={alertFn}>Get OTP</button>
      </div>
    </div>
  );
}

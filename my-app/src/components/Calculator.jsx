import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.css";

const Calculator = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div>
        <h1>Welcome to Calculator Page</h1>
        <button className="btnn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>

      <div className="calculator">
        <div className="calculator__output">{inputValue || "0"}</div>
        <div className="calculator__keys">
          <button
            className="calculator__key calculator__key--operator"
            onClick={() => setInputValue(inputValue + "+")}
          >
            +
          </button>
          <button
            className="calculator__key calculator__key--operator"
            onClick={() => setInputValue(inputValue + "-")}
          >
            -
          </button>
          <button
            className="calculator__key calculator__key--operator"
            onClick={() => setInputValue(inputValue + "*")}
          >
            &times;
          </button>
          <button
            className="calculator__key calculator__key--operator"
            onClick={() => setInputValue(inputValue + "/")}
          >
            ÷
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "7")}
          >
            7
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "8")}
          >
            8
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "9")}
          >
            9
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "4")}
          >
            4
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "5")}
          >
            5
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "6")}
          >
            6
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "1")}
          >
            1
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "2")}
          >
            2
          </button>
          <button
            className="calculator__key"
            onClick={() => setInputValue(inputValue + "3")}
          >
            3
          </button>
          <button className="calculator__key" onClick={() => setInputValue("")}>
            AC
          </button>
          <button
            className="calculator__key calculator__key--enter"
            onClick={() => setInputValue(eval(inputValue))}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;

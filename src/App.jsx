import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(input).toString();
      setHistory([...history, `${input} = ${result}`]);
      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculatePercentage = () => {
    setInput((prev) => (parseFloat(prev) / 100).toString());
  };

  const calculateSquareRoot = () => {
    setInput((prev) => Math.sqrt(parseFloat(prev)).toString());
  };

  return (
    <div className="container">
      <div className="calculator">
        {/* Title */}
        <h1 className="title">React Calculator by JR</h1>

        <div>
          <br></br>
        </div>


        {/* Display */}
        <div className="display">{input || "0"}</div>

        {/* Buttons */}
        <div className="buttons">
          {["7", "8", "9", "/"].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
          ))}
          {["0", ".", "+"].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
          ))}

          {/* Special Buttons Above Equals */}
          <button className="percentage" onClick={calculatePercentage}>%</button>
          <button className="sqrt" onClick={calculateSquareRoot}>√sqrt</button>

          {/* Equal and Clear Buttons */}
          <button className="equal" onClick={calculateResult}>=</button>
          <button className="clear" onClick={clearInput}>Clear All</button>

          {/* Backspace Button */}
          <button className="backspace" onClick={backspace}>BackSpace</button>
        </div>
      </div>
    </div>
  );
}

export default App;
import { useState } from "react";

function App() {
  const [firstInputNum, setFirstInputNum] = useState();
  const [secondInputNum, setSecondInputNum] = useState();
  const [answer, setAnswer] = useState();
  const [factor, setFactor] = useState("+");

  function sumInputs() {
    switch (factor) {
      case "+":
        setAnswer(Number(firstInputNum) + Number(secondInputNum));
        break;
      case "-":
        setAnswer(Number(firstInputNum) - Number(secondInputNum));
        break;
      case "/":
        setAnswer(Number(firstInputNum) / Number(secondInputNum));
        break;
      case "*":
        setAnswer(Number(firstInputNum) * Number(secondInputNum));
        break;
    }
  }

  return (
    <>
      <input
        type="text"
        value={firstInputNum}
        onChange={(event) => setFirstInputNum(event.target.value)}
      />
      {factor}
      <input
        type="text"
        value={secondInputNum}
        onChange={(event) => setSecondInputNum(event.target.value)}
      />
      <button onClick={sumInputs}>Answer</button>
      {""}
      <button onClick={() => setFactor("+")}>+</button>
      <button onClick={() => setFactor("-")}>-</button>
      <button onClick={() => setFactor("/")}>/</button>
      <button onClick={() => setFactor("*")}>*</button>
      <div>{answer}</div>
    </>
  );
}

export default App;

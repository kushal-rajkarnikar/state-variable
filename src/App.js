import "./App.css";
import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  function handleAdd() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleSubtract() {
    setCounter((prevCounter) => prevCounter - 1);
  }
  return (
    <main>
      <button onClick={handleSubtract}>Subtract</button>
      <div className="circle">{counter}</div>
      <button onClick={handleAdd}>Add</button>
    </main>
  );
}

import "./App.css";
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setbgColor] = useState("yellow");

  function onChange() {
    setCount((c) => c + 1);

    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    setbgColor("rgb(" + x + "," + y + "," + z + ")");
  }

  useEffect(() => {
      let div = document.getElementById('blue')
      div.style.backgroundColor = '#282c34'
    document.title = `You clicked count ${count} times`;
  }, []);

  return (
    <div id="blue">
      <button onClick={onChange} style={{ color }}>
        Count: {count}
      </button>
    </div>
  );
}

export default Counter;

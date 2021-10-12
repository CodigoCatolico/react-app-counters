import React, { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";

export default function Counter({ indexCounter }) {
  let [count, setCount] = useState(0);

  return (
    <div>
      Contador {indexCounter} - Valor Atual: {count}
      <div>
        <Increment increment={() => setCount(++count)} />
        <Decrement decrement={() => setCount(--count)} />            
      </div>
    </div>
  );
}

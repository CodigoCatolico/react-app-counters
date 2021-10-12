import { useEffect, useState } from "react";
import AddCounterComponent from "./components/AddCounterComponent.jsx";
import Counter from "./components/Counter.jsx";
import RemoveCounter from "./components/RemoveCounter.jsx";
import "./App.css";

function App() {
  let [counters, setCounters] = useState([{ id: 1, name: "count_1", amount: 0 }]);

  // useEffect(() => {
  //   console.log("UseEffect Counters: ", counters);
  // }, [counters]);

  const AddCounter = () => {
    // console.log("Valor no último: ", counters[counters.length - 1]);
    let ultimo_valor = counters.length ? counters[counters.length - 1].id + 1 : 1;

    counters.push({ id: ultimo_valor, name: "count_" + ultimo_valor, amount: 0 });

    setCounters([...counters]);
    // setCounters({ ...inner_count, ultimo_valor });

    // console.log("Add Counters: ", { ...counters }, ultimo_valor);
  };

  const RemoveCounterfn = (id) => {
    const new_counters = counters.filter((c) => c.id !== id);
    setCounters([...new_counters]);

    // console.log(`Removendo índice ${i} dos counters`, counters);
  };

  const Increment = (index) => {
    // console.log("Increment: ", counters);

    let counter_tmp = counters.filter((c) => c.id === index);

    ++counter_tmp[0].amount;

    // console.log("Counter filtered: ", counter_tmp[0], "Soma: ", soma);

    setCounters([...counters]);
  };

  const Decrement = (index) => {
    let counter_tmp = counters.filter((c) => c.id === index);
    --counter_tmp[0].amount;
    setCounters([...counters]);
  };

  return (
    <div className="App">
      <h3>
        Learning react - {counters.length} {counters.length === 1 || counters.length === 0 ? "contador" : "contadores"}
      </h3>
      <AddCounterComponent addcounter={() => AddCounter()} />
      <div className="counter-content">
        {counters.map((c, i) => (
          <div className="counter" key={i}>
            Count name: {c.name}
            <Counter
              indexCounter={c.id}
              amount={c.amount}
              increment={(i) => Increment(i)}
              decrement={(i) => Decrement(i)}
            />
            <RemoveCounter deleteCounter={() => RemoveCounterfn(c.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

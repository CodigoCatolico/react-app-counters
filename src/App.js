import { useEffect, useState } from "react";
import AddCounterComponent from "./components/AddCounterComponent.jsx";
import Counter from "./components/Counter.jsx";
import RemoveCounter from "./components/RemoveCounter.jsx";
import "./App.css";

function App() {
  let [counters, setCounters] = useState([{ id: 1, name: "count_1" }]);

  useEffect(() => {
    console.log("UseEffect Counters: ", counters);
  }, [counters]);

  const AddCounter = () => {
    // console.log("Valor no último: ", counters[counters.length - 1]);
    let ultimo_valor = counters[counters.length - 1].id + 1;

    counters.push({ id: ultimo_valor, name: "count_" + ultimo_valor });

    setCounters([...counters]);
    // setCounters({ ...inner_count, ultimo_valor });

    // console.log("Add Counters: ", { ...counters }, ultimo_valor);
  };

  const RemoveCounterfn = (i) => {
    counters.splice(i, 1);
    setCounters([...counters]);

    // console.log(`Removendo índice ${i} dos counters`, counters);
  };

  return (
    <div className="App">
      <h3>Learning react - {counters.length} contadores</h3>
      <AddCounterComponent addcounter={() => AddCounter()} />
      <div className="counter-content">
        {counters.map((c, i) => (
          <div className="counter" key={i}>
            Count name: {c.name}
            <Counter indexCounter={c.id} />
            <RemoveCounter deleteCounter={() => RemoveCounterfn(i)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

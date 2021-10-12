import Decrement from "./Decrement";
import Increment from "./Increment";

export default function Counter({ indexCounter,amount,increment,decrement }) {

  return (
    <div>
      Contador {indexCounter} - Valor Atual: {amount}
      <div>
        <Increment increment={() => increment(indexCounter)} />
        <Decrement decrement={() => decrement(indexCounter)} />            
      </div>
    </div>
  );
}

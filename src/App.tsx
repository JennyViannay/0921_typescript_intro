import React from 'react';
import './App.css';

type CounterProps = {
  initialCount: number;
  step?: number;
}

const Counter = ({ initialCount = 0, step = 1 } : CounterProps) => {
  const [count, setCount] = React.useState(initialCount);
  const [increment, setIncrement] = React.useState(step);

  return (
    <div>
      <h1>{count}</h1>
      <input type="number" onChange={(e) => setIncrement(parseInt(e.target.value))}/>
      <button onClick={() => setCount(count - increment)}>-</button>
      <button onClick={() => setCount(count + increment)}>+</button>
    </div>
  )
}


type FormProps = {
  title: string;
}

const Form = ({ title } : FormProps) => {
  return (
    <div>
      <h1>{title}</h1>
      form
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <Form title="plop" />
    </div>
  );
}

export default App;

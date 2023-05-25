import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage ({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    setValueToAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);

  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is  {count}</h1> 
      <div className='flex flex-row mt-3'>
        <Button primary onClick={increment} className="mr-3">
          Increment
        </Button>
        <Button primary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input value={valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg0gray-50 border border-gray-300" />
        <Button secondary>Add it!</Button>
      </form>
    </Panel> 
  )
}

export default CounterPage;
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      }  

    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }  

    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      }

      default:
        throw new Error('unexpected action type: ' + action.type);
  }
}

function CounterPage ({ initialCount }) {

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1> 
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
        <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg0gray-50 border border-gray-300" />
        <Button secondary>Add it!</Button>
      </form>
    </Panel> 
  )
}

export default CounterPage;
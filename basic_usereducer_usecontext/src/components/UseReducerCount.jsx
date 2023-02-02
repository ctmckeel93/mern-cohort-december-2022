import React, { useReducer } from 'react';

const initialValue = 0; 

const Counter = () => {

  const [ reducerCount, reducerDispatchFunction ] = useReducer((state, action) => {
    // YOU MUST RETURN A VALID STATE FROM THIS FUNCTION!!!!
    //  whatever you return BECOMES the new state value
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  }, initialValue);

  return (
    <div>
      <h2 className="mb-3">Simple Data Type - useReducer - Current Count: {reducerCount}</h2>
      {/* NO state has to be passed in!  */}
      <button className='m-5' onClick={ () => reducerDispatchFunction('increment')}>Increment</button>
      <button className='m-5' onClick={ () => reducerDispatchFunction('decrement')}>Decrement</button>

    </div>
  )
}

export default Counter;

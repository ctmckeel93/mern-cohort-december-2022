//=======================================================================================
// using an object
//=======================================================================================
import React, { useReducer } from 'react';

// const initialState = {
//   count: 0,
//   countLabel: "Objects - Current Count",
// };

//=======================================================================================
// using an object with useReducer
//=======================================================================================

// when working with objects, you MUST recreate the whole object in some way
//    destructuring is the best option to create a copy and then 
//    overwrite the data that needs to be updated
function reducer(state, bubbles) {
  switch (bubbles.action) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      throw new Error();
  }
}

function CounterObject(props) {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // The initial value sometimes needs to depend on props and so is specified from the Hook call
  //    once you have access to the initial values you want
  const [state, dispatch] = useReducer(reducer, {
    count: props.initialValue,
    countLabel: "Objects - Current Count",
  });

  return (
    <>
      <h2>{state.countLabel}: {state.count}</h2>
      <button className="ml-4" onClick={() => dispatch({action: 'decrement'})}>-</button>
      <button className="ml-4" onClick={() => dispatch({action: 'increment'})}>+</button>
    </>
  );
}

export default CounterObject;
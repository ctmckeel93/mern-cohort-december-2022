import React, { useContext } from 'react';
import { CountContext } from '../context/CountContext';


function UseContextCount () {
	const { currentCount, setCurrentCount } = useContext(CountContext);

	const incrementCount = () => {
		setCurrentCount(currentCount + 1);
	}
	const decrementCount = () => {
		setCurrentCount(currentCount - 1);
	}

	return (
		<div>
      <h2 className="mb-3">Using Context Count: {currentCount}</h2>
			<button className='ml-4' onClick={() => incrementCount()}>Increment</button>
			<button className='ml-4' onClick={() => decrementCount()}>Decrement</button>
		</div>
	)
}

export default UseContextCount;
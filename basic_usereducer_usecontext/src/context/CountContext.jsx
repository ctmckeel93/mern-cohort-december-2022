import React, { useState, createContext } from 'react';

const CountContext = createContext();

function CountProvider ({children}) {
	// const {children} = props;
	const [ currentCount, setCurrentCount ] = useState(0);

	return (
		<CountContext.Provider value={
			{
				currentCount: currentCount,
				setCurrentCount: setCurrentCount
			}
		}>
			{children}
		</CountContext.Provider>
	)

}

export { CountContext, CountProvider };

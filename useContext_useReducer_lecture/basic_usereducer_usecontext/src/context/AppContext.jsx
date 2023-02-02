import React, { useState, createContext } from 'react';

const AppContext = createContext();

const userInfoArray = [
	{
		name: "Billy Bob",
		age: 34,
		motto: "With the right tools, any car can become a convertable!"
	},
	{
		name: "Sally Smith",
		age: 29,
		motto: "Anything is possible with enough time and code!"
	},

]

// the children is coming through props and we destructure it IN the parameters
//		The children in this case are ALL of the components that can access this
//		context (aka - that are between the context tags in App.js)
function AppProvider({children}) {
	// default our current user to the first user in our list
	const [ currentUser, setCurrentUser ] = useState(userInfoArray[1]);

	return (
		<AppContext.Provider value = {{
			currentUser: currentUser,
			setCurrentUser: setCurrentUser,
			usersArray: userInfoArray
		}}>
			{children}
		</AppContext.Provider>
	)
}

export { AppProvider, AppContext };

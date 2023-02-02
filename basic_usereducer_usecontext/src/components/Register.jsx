import React, { useReducer } from 'react';

// we can create our initial values in an object OUTSIDE of the exported function
//    We could technically do this object creation in another file and import it
//      using a standard for all components in one place  :)
const initialUser = {
  firstName: '',
  lastName: '',
  email: '', 
  mobile: '', 
  password: '',
  confirm: '',
}

// this reducer function will use the previous state to update a specific key value pair
//    the key (action.type) with the value (action.payload)
const reducerFunc = (state, action) => {
  return {
    ...state,
    [action.type]: action.payload
  }
}

// start the functional component here
//    we can pass in props or use the default values
const Register = (props) => {

  // create 2 different reducers, but they can share the reducer function!
  const [ regState , dispatchReg ] = useReducer(reducerFunc, initialUser)

  const handleChange = (e) => {
    // using the name and value properties (attributes) of the event target we can identify
    //    the key and value to update in the state object
    const { name, value } = e.target;

    // calling the reducer function we created above
    dispatchReg({
      type: name,
      payload: value
    })
  }

  const register = (e) => {
    e.preventDefault();
    console.log(`Congratulations on registering ${regState.firstName} ${regState.lastName}!`);
    console.log(regState);
  }

  return (
    <div>
      <h2>Please Register</h2>
      <form onSubmit={ register }>
        <div className="form-group">
          <label>First Name:</label>
          <input 
            name="firstName"
            onChange={ handleChange }
            className="form-control"
            type='text' />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input 
            name="lastName"
            onChange={ handleChange }
            className="form-control"
            type='text' />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            name="email"
            onChange={ handleChange }
            className="form-control"
            type='text' />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input 
            name="mobile"
            onChange={ handleChange }
            className="form-control"
            type='text' />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            name="password"
            onChange={ handleChange }
            className="form-control"
            type='text' />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input 
            name="confirm"
            onChange={ handleChange }
            className="form-control"
            type='text' />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      <h3 className="my-5">{regState.firstName} {regState.lastName} is registering!</h3>
    </div>
  )
}

export default Register;

import {useState} from 'react';
import axios from 'axios';
const LoginPage = props => {

    const [state, setState] = useState({
        register: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        login: {
            email: "",
            password: ""
        }
    })

    const {register, login} = state;

    const handleRegInputs = (e) => {
        props.setAuthorized("");
        setState({...state, register: {...state.register,[e.target.name]: e.target.value}})    
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        
        axios.post("http://localhost:8000/api/register", register, {withCredentials: true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleLoginInputs = (e) => {
        props.setAuthorized("");
        setState({...state, login: {...state.login, [e.target.name]: e.target.value}})
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", login, {withCredentials:true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }



    return (
        <>
        
        <h1 className="text-danger" style={{display:"inline"}}>{props.authorized}</h1>
        <div className="container d-flex justify-content-around p-3 ">
            <form onSubmit={handleRegistration} className="col-md-5 p-3 text-start gap-3 bg-dark text-light">
                <h2>Registration</h2>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={handleRegInputs} name="firstName" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={handleRegInputs} name="lastName" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={handleRegInputs} name="email" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleRegInputs} name="password" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input onChange={handleRegInputs} name="confirmPassword" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>

            <form onSubmit={handleLogin} className="col-md-5 p-3 text-start gap-3 bg-dark text-light">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={handleLoginInputs} name="email" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleLoginInputs} name="password" type="text" className="form-control" />
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default LoginPage;
import React, {Component} from 'react';
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            type: "",
        }
    }

    



    handleChange(e) {
        e.preventDefault()
        console.log(e.target);
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.updatePokemon(this.state);
    }


    render() {
        const {pokemon} = this.props
        return (
            <>
            
                <h1>Form Component</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Name</label>
                    <input onChange={(e) => this.handleChange(e)}  name="name"  type="text" />
                    <label>Type</label>
                    <input onChange={(e) => this.handleChange(e)} name="type" type="text" />
                    <button>Add</button>
                </form>

                {pokemon && pokemon.map((poke, i) => {return <p key={i}>{poke.name}</p>})}
            </>
        )
    }
}

export default Form;
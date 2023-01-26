import './App.css';
import React, {Component} from 'react'
import Form from './components/Form';
class App extends Component  {

  constructor() {
    super()
    this.state = {
      pokemon: [],
    }
  }

  componentDidMount() {
    const pokemonList =  JSON.parse(window.localStorage.getItem("pokemon")) || []
    this.setState({pokemon: pokemonList});
} 

    updatePokemon = (pokemonToAdd) => {
      this.setState({pokemon:[...this.state.pokemon, pokemonToAdd ]});
      window.localStorage.setItem("pokemon", JSON.stringify([...this.state.pokemon, pokemonToAdd ]) )
    }

 

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.pokemon)}
        <Form pokemon={this.state.pokemon} updatePokemon={this.updatePokemon}/>
      </div>
    );
  }
}

export default App;

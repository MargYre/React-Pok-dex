import React, { FunctionComponent, useState, useEffect} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon'

const App: FunctionComponent = () => {
 //const [pokemons] = useState<Pokemon[]>(POKEMONS);
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(() => {
    setPokemons(POKEMONS);
 }, []);

 return (
<div>
  <h1>Pokédex</h1>
    <p>Il y a {pokemons.length} pokémon dans le pokédex</p>
    
    <p>plop</p>
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  </div>
 )
}
  
export default App; 
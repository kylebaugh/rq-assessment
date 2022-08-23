import {useState, useEffect} from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  console.log(pokemons)
  const [searchTerm, setSearchTerm] = useState('')
  let searchedPokemon = []

  if(!searchTerm){
      searchedPokemon = [...pokemons]
  }else{
    // const value = pokemons.name
    searchedPokemon = pokemons.filter(p => p.name.toLowerCase().includes(searchTerm) === true)
  }

  useEffect(() => {
    console.log('Use effect triggered')
    console.log(searchTerm)
}, [searchTerm])

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      <section>
        <input placeholder='Search Pokemon' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}/>
      </section>
      {searchedPokemon.map((pkmn) => (
        <div key={pkmn.id}>{pkmn.name}
          <section>{pkmn.number}</section>
          <section>{pkmn.types}</section>
          <img src={`${pkmn.image}`}/>
        </div>
      ))}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      color: 'black'
    },
  },
  { name: 'PokemonList' },
  // {input: {
  //   color: 'black'
  // }}
);

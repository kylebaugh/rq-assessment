import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  console.log(pokemons)

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      <section>
        <input placeholder='Search Pokemon'/>
      </section>
      {pokemons.map((pkmn) => (
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
    },
  },
  { name: 'PokemonList' }
);

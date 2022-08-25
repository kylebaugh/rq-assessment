import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { myStyles } from '../components';

type PokemonType = keyof typeof myStyles;

export type Pokemon = {
  id: string;
  name: string;
  number: number;
  image: string;
  types: PokemonType[];
  height: string;
  // weight: string;
  maxCP: number;
  maxHP: number;
  classification: string;

};

export type PokemonOption = {
  value: Pokemon['id'];
  label: Pokemon['name'];
  number: Pokemon['number'];
  image: Pokemon['image'];
  types: Pokemon['types'];
  height: Pokemon['height'];

  maxCP: Pokemon['maxCP'];
  maxHP:  Pokemon['maxHP'];
  classification: Pokemon['classification'];
};

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      image
      types
      maxCP
      maxHP
      classification
    }
  }
  `;

  export const useGetPokemons = () => {
  const { data, ...queryRes } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151, // Keep hard coded
    },
  });

  const pokemons: Pokemon[] = useMemo(() => data?.pokemons || [], [data]);
  const pokemonOptions: PokemonOption[] = useMemo(
    () => pokemons.map((p: Pokemon) => ({ value: p.id, label: p.name, number: p.number, image: p.image, types: p.types, height: p.height, maxCP: p.maxCP, maxHP: p.maxHP, classification: p.classification})),
    [pokemons]
  );

  return {
    pokemons,
    pokemonOptions,
    ...queryRes,
  };
};

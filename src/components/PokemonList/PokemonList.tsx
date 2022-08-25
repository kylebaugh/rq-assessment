import {useState, useEffect} from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [searchTerm, setSearchTerm] = useState('')
  let searchedPokemon = []

  if(!searchTerm){
      searchedPokemon = [...pokemons]
  }else{
    searchedPokemon = pokemons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) === true)
  }

  useEffect(() => {
    console.log('Use effect triggered')
}, [searchTerm, pokemons])

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      <section>
        <h3>Choose your Pokemon!</h3>
        <input className={classes.myInput} placeholder='Search Pokemon' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </section>
      <div className={classes.pkmnDisplay}>
      {searchedPokemon.map((pkmn) => {

        return (
        <div key={pkmn.id} className={classes.pkmnCard}> 
          
          <section >
            <img className={classes.pkImage} src={`${pkmn.image}` } alt={`${pkmn.name}`}/>
          </section>

          <section className={classes.cardBottom}>
            <section className={classes.nameNumber}>#{pkmn.number} - {pkmn.name}</section>
            <section className={classes.types}>            
            
              {<section className={classes[pkmn.types[0]]}>{pkmn.types[0]}</section>}
              {pkmn.types[1] && <section className={classes[pkmn.types[1]]}>{pkmn.types[1]}</section>}

            </section>

            <section className={classes.details}>

              <section>The {pkmn.classification}</section>
              
              <section className={classes.maxStats}>
                <li>Maximum Health: {pkmn.maxHP}</li>
                <li>Maximum Power: {pkmn.maxCP}</li>
              </section>

            </section>
          </section>

        </div>
        )})}
      </div>
    </div>
    );
};


export let myStyles = {
  root: {
    width: '100%',
    textAlign: 'center',
    padding: '32px',
    boxSizing: 'border-box',
    
  },
  details:{
    display: 'none'
  },

  myInput: {
    color: 'black',
  },

  pkmnDisplay:{
    display:'flex',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
    width: '90vw',
    paddingTop: '5vh'

  },
  
  pkmnCard: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom: '2.5vh',
    height:'27.5vh',
    textAlign:'center',
    width:'20vw',
    '&: section':{
      width:'15vw',
      border:'1px solid white'
    },
    '&:hover': {
      height:'32.5vh',
      alignItems:'center'
    },
    '&:hover $details': {
      display: 'flex',
      flexDirection:'column',
      height:'fitContent',
      gap:'5px'
    }
  },

  pkImage: {
    height: '20vh',
    maxWidth:'20vw'
  },

  nameNumber: {
    width:'10vw',
    fontSize:'16px',
  },
  
  cardBottom:{
    display:'flex',
    flexDirection: 'column',
    justifyContent:'space-evenly',
    gap:'5px',
    
  },

  types: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  maxStats:{
    display:'flex',
    flexDirection:'column',
    listStyleType:'none',
  },
  
  Normal : {
    backgroundColor: 'beige',
    color:'black',
    padding:'2px'
  },
  
  Fire: {
    backgroundColor: 'red',
    padding:'2px'
  },
  Water: {
    backgroundColor: 'blue',
    padding:'2px'
  },
  Grass: {
    backgroundColor: 'green',
    padding:'2px'
  },
  Flying: {
    backgroundColor: 'teal',
    padding:'2px'
  },
  Fighting: {
    backgroundColor: 'orange',
    padding:'2px'
  },
  Poison: {
    backgroundColor: 'purple',
    padding:'2px'
  },
  Electric: {
    backgroundColor: 'yellow',
    padding:'2px'
  },
  Ground: {
    backgroundColor: 'lightYellow',
    color:'black',
    padding:'2px'
  },
  Rock: {
    backgroundColor: 'brown',
    padding:'2px'
  },
  Psychic: {
    backgroundColor: 'lightPurple',
    padding:'2px'
  },
  Ice: {
    backgroundColor: 'blue',
    padding:'2px'
  },
  Bug: {
    backgroundColor: 'lightGreen',
    color:'black',
    padding:'2px'
  },
  Ghost: {
    backgroundColor: 'darkPurple',
    padding:'2px'
  },
  Steel: {
    backgroundColor: 'silver',
    color:'black',
    padding:'2px'
  },
  Dragon: {
    backgroundColor: 'fushia',
    padding:'2px'
  },
  Dark: {
    backgroundColor: 'gray',
    padding:'2px'
  },
  Fairy: {
    backgroundColor: 'pink',
    color:'black',
    padding:'2px'
  },
}

const useStyles = createUseStyles(
  myStyles,
  { name: 'PokemonList' },
  
);

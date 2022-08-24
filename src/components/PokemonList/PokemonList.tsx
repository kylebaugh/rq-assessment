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
    console.log(searchTerm)
}, [searchTerm])

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
            <img className={classes.pkImage} src={`${pkmn.image}`}/>
          </section>

          <section className={classes.cardBottom}>
            <section>#{pkmn.number} - {pkmn.name}</section>
            <section className={classes.types}>

              {/* <section className={`${classes}.${type1}`}></section>
              {pkmn.types[1] && <section className={`${classes}.${type2}`}></section>} */}

              {/* tell interpreter that types is an array of keys of classes */}
            
            
              {<section className={classes[pkmn.types[0]]}>{pkmn.types[0]}</section>}
              {pkmn.types[1] && <section className={classes[pkmn.types[1]]}>{pkmn.types[1]}</section>}

              {/* {pkmn.types[0] === 'Fire' && <section className={classes.fire}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Water' && <section className={classes.water}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Grass' && <section className={classes.grass}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Flying' && <section className={classes.flying}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Fighting' && <section className={classes.fighting}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Poison' && <section className={classes.poison}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Electric' && <section className={classes.electric}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Ground' && <section className={classes.ground}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Rock' && <section className={classes.rock}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Psychic' && <section className={classes.psychic}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Ice' && <section className={classes.ice}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Bug' && <section className={classes.bug}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Ghost' && <section className={classes.ghost}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Steel' && <section className={classes.steel}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Dragon' && <section className={classes.dragon}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Dark' && <section className={classes.dark}>{pkmn.types[0]}</section>}
              {pkmn.types[0] === 'Fairy' && <section className={classes.fairy}>{pkmn.types[0]}</section>} */}

              {/* {pkmn.types[1] === 'Normal' && <section className={classes.normal}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Fire' && <section className={classes.fire}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Water' && <section className={classes.water}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Grass' && <section className={classes.grass}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Flying' && <section className={classes.flying}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Fighting' && <section className={classes.fighting}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Poison' && <section className={classes.poison}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Electric' && <section className={classes.electric}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Ground' && <section className={classes.ground}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Rock' && <section className={classes.rock}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Psychic' && <section className={classes.psychic}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Ice' && <section className={classes.ice}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Bug' && <section className={classes.bug}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Ghost' && <section className={classes.ghost}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Steel' && <section className={classes.steel}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Dragon' && <section className={classes.dragon}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Dark' && <section className={classes.dark}>{pkmn.types[1]}</section>}
              {pkmn.types[1] === 'Fairy' && <section className={classes.fairy}>{pkmn.types[1]}</section>} */}

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
    paddingBottom:'5vh',
    width:'20vw'
  },

  pkImage: {
    height: '20vh',
    maxWidth:'20vw'
  },
  
  cardBottom:{
    height:'5vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'space-evenly'
  },

  types: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '10vw'
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

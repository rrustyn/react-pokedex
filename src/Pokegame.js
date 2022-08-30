import { choice, remove } from './helpers';
import Pokedex from './Pokedex';

function Pokegame({pokemans}) {
  let pokeTeam = [];
  let pokemons = pokemans;
  for (let i = 0; i<4; i++) {
    let pokemon = choice(pokemons);
    pokeTeam.push(pokemon);
    pokemons = remove(pokemons,pokemon);
  }

  const team1Score = sumPoints(pokeTeam);
  const team2Score = sumPoints(pokemons);

  return (
    <div>
    <div>
      <p>Team 1 score: {team1Score}</p>
      <Pokedex pokemans={pokeTeam} isWinner={team1Score>team2Score} pokescore={team1Score}/>
    </div>
    <div>
      <p>Team 2 score: {team2Score}</p>
      <Pokedex pokemans={pokemons} isWinner={team2Score>team1Score}  pokescore={team2Score}/>
    </div>
    </div>
  )

}

function sumPoints(pokerray) {
  let sum = 0;
  for (let pokemon of pokerray) {
    sum += pokemon.base_experience
  }
  return sum;
} 


export default Pokegame
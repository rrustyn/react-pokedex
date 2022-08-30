import Pokecard  from "./Pokecard";
import './Pokedex.css'

function Pokedex ({pokemans,isWinner,pokescore}) {
    return (
        <div className="Pokedex">
            {pokemans.map(p => <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>)}
            <p>{isWinner? "THIS HAND WINS!!" :null}</p>
        </div>
    )
}

export default Pokedex;
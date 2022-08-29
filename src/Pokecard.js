import './Pokecard.css';

function Pokecard({ id, name, type, exp }) {  
    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{name}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${name} sprite`} />
            <div>Type: {type}</div>
            <div>EXP: {exp}</div>
        </div>
    );
}

export default Pokecard;
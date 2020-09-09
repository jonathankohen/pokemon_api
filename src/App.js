import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then((res) => setPokemon(res.data.results));
    }, [isClicked]);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div className="App">
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
            >
                Gotta Catch 'Em All!
            </button>
            {isClicked
                ? pokemon.map((poke, index) => {
                      return <div key={index}>{poke.name}</div>;
                  })
                : null}
        </div>
    );
}

export default App;

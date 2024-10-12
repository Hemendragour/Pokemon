import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="border p-4 m-2 rounded shadow">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2 className="text-lg font-bold">{pokemon.name}</h2>
        </div>
    );
};

export default PokemonCard;

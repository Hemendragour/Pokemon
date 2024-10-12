// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PokemonCard from './PokemonCard';

// const PokemonList = () => {
//     const [pokemons, setPokemons] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
//             setPokemons(response.data.results);
//         };
//         fetchData();
//     }, []);

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredPokemons = pokemons.filter(pokemon =>
//         pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search Pokémon..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 className="border p-2 m-4"
//             />
//             <div className="flex flex-wrap">
//                 {filteredPokemons.map((pokemon) => (
//                     <PokemonCard key={pokemon.name} pokemon={pokemon} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PokemonList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
                const pokemonList = response.data.results;

                // Fetch each Pokémon's detailed data
                const pokemonDetails = await Promise.all(
                    pokemonList.map(async (pokemon) => {
                        const pokemonData = await axios.get(pokemon.url);
                        return pokemonData.data;
                    })
                );
                setPokemons(pokemonDetails);
            } catch (error) {
                console.error('Error fetching Pokémon data', error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={handleSearch}
                className="border p-2 m-4"
            />
            <div className="flex flex-wrap">
                {filteredPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonList;

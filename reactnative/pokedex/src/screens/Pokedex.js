import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { getPokemonDetailsByUrlApi, getPokemonsApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            if (loading) return;

            setLoading(true);

            const response = await getPokemonsApi(nextUrl);
            setNextUrl(response.next);

            const pokemonsArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default,
                });
            }

            setPokemons((prevPokemons) => [...prevPokemons, ...pokemonsArray]);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} loading={loading} isNext={nextUrl && !loading} />
        </View>
    );
}
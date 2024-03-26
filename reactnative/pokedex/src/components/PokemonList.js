import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
    const { pokemons, loadPokemons, loading, isNext } = props;

    const loadMore = () => {
        if (!loading) { 
            loadPokemons();
        }
    };

    return (
        <FlatList 
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={loading && (
                <ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />
            )}
        />
    );
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 0 // dar condiciones a un android y a ois diferentes
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 60
    }
});
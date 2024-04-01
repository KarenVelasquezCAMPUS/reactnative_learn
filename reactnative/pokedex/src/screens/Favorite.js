import React from 'react';
import { View, Text, Button } from 'react-native';
import { getPokemonFavoriteApi } from '../api/favorite';
import { initial } from 'lodash';

export default function Favorite() {

  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }

  return (
    <View>
      <Text>Favorite</Text>
      <Button title = "Obtener Favoritos" onPress={checkFavorites} />
    </View>
  )
}
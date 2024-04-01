import React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5"
/* import FavoriteScreen from '../screens/Favorite'; */
/* import PokedexScreen from '../screens/Pokedex'; */
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator initialRouteName='Pokedexx'>
            <Tab.Screen 
            name = 'Favoritee' 
            component = {FavoriteNavigation} 
            options={{
                tabBarLabel: "Favoritos",
                headerTitle: "Favoritos",
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => {
                    return (
                        <Icon name='heart' color= {color} size={size} />
                    )

                }
            }} />
            <Tab.Screen 
            name = 'Pokedexx' 
            component = {PokedexNavigation} 
            options={{
                tabBarLabel: "",
                headerTitle: "Pokedex",
                headerTitleAlign: 'center',
                headerShown: false,
                tabBarIcon: () => renderPokeball(),
            }} />
            <Tab.Screen 
            name = 'Account' 
            component = {Account} 
            options={{
                tabBarLabel: "Mi cuenta",
                headerTitle: "Mi cuenta",
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => {
                    return (
                        <Icon name="user" color= {color} size= {size} />
                    )
                }
            }} />
        </Tab.Navigator>
    );
}

function renderPokeball () {
    return (
        <Image 
            source = {require('../assets/pokeball.png')}
            style = {{ width: 75, height: 75, top: -15 }}
        />
    )
}
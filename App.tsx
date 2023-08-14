/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewScreen from './NewScreen';
import HomeScreen from './HomeScreen';
import Login from './LoginPage';
import Resigstration from './ResigstrationPage';
import Pokemonlist from './PokemonPage';
import Pokemondetails from './PokemonDetailsPage';
import Product from './Productpage';
import ProductwithoutFL from './ProductwithoutFlatlist';
import ProductDetailScreen from './ProductDetailScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="New" component={NewScreen} />
        <Stack.Screen name="loginScreen" component={Login}/>
        <Stack.Screen name ="RegistrationScreen" component={Resigstration}/>
        <Stack.Screen name="PokemonScreen" component={Pokemonlist}/>
        <Stack.Screen name="PokemonDetailScreen" component={Pokemondetails}/>
        <Stack.Screen name="ProductScreen" component={Product}/>
        <Stack.Screen name="ProductW/OFLScreen" component={ProductwithoutFL}/>
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>

      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default App;


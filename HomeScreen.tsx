import React, { useState } from 'react';
import {
    Text,
    View,
    Button
  } from 'react-native';

  const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <Text>Welcome to the HomeScreen</Text>
        <Button title="Go to New Screen"
          onPress={() => navigation.navigate('New')} />

    <View> 
        <Button title= "Login" onPress={()=>navigation.navigate('loginScreen')}/>
        <Button title="Resigstration" onPress={()=>navigation.navigate('RegistrationScreen')}/>
        <Button title="Pokemon" onPress={()=>navigation.navigate('PokemonScreen')} />
        <Button title="Product" onPress={()=>navigation.navigate('ProductScreen')} />
        <Button title="Product W/O FL" onPress={()=>navigation.navigate('ProductW/OFLScreen')}/>
    </View>

      </View>
    )
  };
  
  export default HomeScreen;
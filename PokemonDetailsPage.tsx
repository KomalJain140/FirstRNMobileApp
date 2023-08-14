import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';



const Pokemondetails = () => {
  const [loader, setloader] = useState(true);
  //useRoute().params.pokname

  const route = useRoute();
  const data = route.params;
  const [pokemonData, setpokemonData] = useState({
    height: 0,
    base: 0,
    image: '',
    abi: '',
  });
  //   const [height, setheight] = useState();
  //   const [base, setbase] = useState();
  //   const [image, setimage] = useState();
  //   const [abi, setabi] = useState();

  const onClickme = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + data.pokname;

    axios
      .get(url)
      .then(response => {
        // setheight(response.data.height);
        // setbase(response.data.base_experience);
        // setimage(response.data.sprites.back_default);

        const abilities = response.data.abilities;
        let allAbilities = '';
        abilities.forEach(ability => {
          allAbilities = allAbilities + ',' + ability.ability.name;
        });
        setpokemonData({
          height: response.data.height,
          base: response.data.base_experience,
          image: response.data.sprites.back_default,
          abi: allAbilities.trim().split(',').filter(Boolean).join(','),
        });
        // setloader(false);
        console.log('Abilities', setpokemonData);
        console.log('Response', response.data);
      })

      .catch(error => {
        console.error('Error', error.message);
        // setloader(false);
      });
  };

  React.useEffect(() => {
    onClickme()
  }, [])


  const renderLoader = () => {
    if (loader) {
      return <ActivityIndicator size={'small'} color={"black"} />;
    } else {
    }
  };

  return (
    <View>
      <Text>Hi This is Pokemon detail page</Text>
      <Text>Pokemon_Name = {data.pokname}</Text>
      <Text>Pokemon_Height = {pokemonData.height}</Text>
      <Text>Pokemon_base_experience = {pokemonData.base}</Text>
      <Text>Pokemon_abilities = {pokemonData.abi}</Text>
      {renderLoader()}
      <Image source={{uri: pokemonData.image}} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={onClickme}>
        <Text style={styles.buttonText}>ClickMe</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Pokemondetails;

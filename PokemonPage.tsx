import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';

const Pokemonlist = abc => {
  // console.log("Pokemonlist screen render - render")
  const [data, setdata] = useState([]);
  const [loader, setloader]=useState(true);
  const [offset,setoffset] = useState(0);
  
  const onClick = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset='+offset;
    setoffset(offset+20)
    console.log(url)
    console.log("Before hitting API")
    setloader(true)
    axios
      .get(url)
      .then(response => {
        console.log("API Completed Now")
        setdata(data.concat(response.data.results));
        setloader(false)
        //  console.log('Response:', response.data.results);
      })
      .catch(error => {
        console.error('Error', error.message);
        setloader(false)
      });
      console.log("After hitting API")
  };
  const pagination =()=> {
    // console.log("offset1="+offset)
    // console.log("offset2="+offset)
    onClick()
    
  }
 
  // useEffect();
  
  React.useEffect(function () {
    // console.log("inside useEffect- mount ho gya1")
    onClick()
  }, [])

  const renderLoader = () => {
    if(loader) {
      return <View style={{position: "absolute", alignSelf: "center", top: "50%"}}>
        <ActivityIndicator size={"large"} color={"red"} />
      </View>
    } else {

    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity style={styles.button} onPress={pagination}>
        <Text style={styles.buttonText}>PressMe</Text>
      </TouchableOpacity>
      
      

      <Text>List of Pokemon</Text>

      <FlatList
        data={data}
        style={{flex: 1}}
        onEndReached={onClick}
        renderItem={ ({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                abc.navigation.navigate('PokemonDetailScreen',{pokname: item.name });
              }}>
              <Text style={styles.item} >{item.name}</Text>
              
            </TouchableOpacity>
          );
        }}
      />
      {renderLoader()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  item: {
    // borderWidth: 1,         // Add a border width
    // borderColor: 'black',  // Add a border color
    paddingHorizontal: 10,           // Add padding to create space around the content
    marginHorizontal: 10,      // Add margin to separate items
    fontSize: 17,
    textTransform: "capitalize",
    paddingVertical: 5
  },
});

export default Pokemonlist;

// const list = [
//   { id: '1', name: "bulbasaur" },
//   { id: '2', name: "ivysaur" },
//   { id: '3', name: "venusaur" },
//   { id: '4', name: "charmander" },
//   { id: '5', name: "charmeleon" }
// ];
// const renderItem = ({item}) => {
//   return  (<Text> {item.name} </Text>)
// }
// const renderPokemonUsingArr = () => {
//   const newArr = list.map((item, index) => {
//     return (<Text> {item.name} </Text>)
//   })
//   console.log("newArr", newArr)
//   return newArr;
// }

// return (
//   <View>
//     <Text>List of Pokemon</Text>
//     {/* {renderPokemonUsingArr()} */}
// <FlatList
//       data={list}
//       renderItem={({item, index})=>{
//       return (<Text>{item.name}</Text>)
//       }}

//       // keyExtractor={item => item.id}
//     />

//   </View>
// );

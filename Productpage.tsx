import React, {useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';

const Product = () => {
  const [data, setdata] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [color, setcolor] = useState();
  const [price, setprice] = useState();
  const [discount, setdiscount] = useState();
  const [image, setimage] = useState();

  const onclick = () => {
    const url = 'https://www.tutme.in/img/product.json';
    axios
      .get(url)
      .then(response => {
        // console.log('Response:', response.data.products);
        setdata(response.data.products);
        setname(response.data.product[0].name);
        setdescription(response.data.product[0].description);
        setcolor(response.data.product[0].color);
        setprice(response.data.product[0].price);
        setdiscount(response.data.product[0].discount);
        setimage(response.data.product[0].image);
      })
      .catch(error => {
        console.log('Error', error.message);
      });
  };
  const Pagination = () => {
    onclick();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 16,
          backgroundColor: 'yellow',
          textAlign: 'center',
          padding: 10,
          fontWeight: '400',
          fontStyle: 'italic',
        }}>
        Hi,Welcome to Product Page
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          borderRadius: 10,
          padding: 10,
          alignSelf: 'center',
        }}
        onPress={Pagination}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'center',
            color: '#fff',
          }}>
          Clickme
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        style={{flex: 1, padding: 10, paddingHorizontal: 10}}
        onEndReached={onclick}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item, index}) => {
          return (
            <View style={{flexDirection: "row",alignItems:"center"}}>
              <Image 
                source={{uri: item.image}}
                style={{height: 100, width: 100}}
              />
              <View style={{paddingHorizontal:10,paddingVertical:13,flex:1}}>
                <Text> Product_Name = {item.name} </Text>
                <Text > Product_Description = {item.description} </Text>
                <Text> Product_Color = {item.color} </Text>
                <Text> Product_Price = {item.price} USD </Text>
                <Text> Product_discount = {item.discount} USD </Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Product;



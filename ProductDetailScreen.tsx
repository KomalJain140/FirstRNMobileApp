import React, {useState} from 'react';
import axios from 'axios';
import {Text,View,Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ProductDetailScreen =() =>{
    const route = useRoute().params;
    console.log("route",route)



return(

<View>
    
      <Text>Hi This is Product Detail page</Text>
      
      <Text>Product_Name = {route.item.name}</Text>
      <Text>Product_Description = {route.item.description}</Text>
      <Text>Product_Color = {route.item.color}</Text>
      <Text>Product_Price = {route.item.price} USD</Text>
      <Text>Product_discount= {route.item.discount} USD</Text>
      <Image source={{uri: route.item.image}}
                style={{height: 100, width: 100}}
              />
    </View>
)}

export default ProductDetailScreen ;
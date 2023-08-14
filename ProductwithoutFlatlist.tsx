import React, {useState} from 'react';
import axios from 'axios';
import {Text, View, TouchableOpacity, SafeAreaView, Image,ActivityIndicator, TurboModuleRegistry} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ProductwithoutFL = abc => {
  const [Productdata, setProductdata] = useState([]);
  const[loader,setloader]=useState(true)

  const onclick = () => {
    const url = 'https://www.tutme.in/img/product.json';
    setloader(true)
    axios
      .get(url)
      .then(response => {
        // console.log('Response:', response.data.products);

        setProductdata(response.data.products);
        setloader(true)
      })
      .catch(error => {
        console.log('Error', error.message);
        setloader(true)
      });
  };
  const Pagination = () => {
    onclick();
  };

  React.useEffect(function () {
    onclick();
  }, []);

  const renderLoader =()=>{
if(loader){ 
  return (<ActivityIndicator size={'large'} color={"black"}/>)
   } else{

}

  }

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
      {/* <TouchableOpacity
        // style={{
        //   backgroundColor: '#3498db',
        //   borderRadius: 10,
        //   padding: 10,
        //   alignSelf: 'center',
        // }}
        // // onPress={Pagination}>
        // // <Text
        // //   style={{
        // //     fontSize: 16,
        // //     fontWeight: '400',
        // //     textAlign: 'center',
        // //     color: '#fff',
        // //   }}>
        // //   Clickme
        // </Text>

      </TouchableOpacity> */}
<ScrollView>
      {Productdata.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              abc.navigation.navigate('ProductDetailScreen',{item});
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: item.image}}
                style={{height: 100, width: 100}}
              />
              <View
                style={{paddingHorizontal: 10, paddingVertical: 13, flex: 1}}>
                <Text> Product_Name = {item.name} </Text>
                <Text> Product_Description = {item.description} </Text>
                <Text> Product_Color = {item.color} </Text>
                <Text> Product_Price = {item.price} USD </Text>
                <Text> Product_discount = {item.discount} USD </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
        {renderLoader()}
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductwithoutFL ;

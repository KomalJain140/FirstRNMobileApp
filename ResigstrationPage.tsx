import React, { useState } from 'react';
import axios from 'axios'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Button,
    ScrollView
  } from 'react-native';

  function Resigstration() {

    const [first_name, setfirstname] = useState("");
    const [Last_name, setlastname] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setemail] = useState("");
    const [dateofbirth, setdateofbirth] = useState("");
    const [gender, setgender] = useState("");
    const [destination, setdestination] = useState("");
    const [departure_date, setdeparturedate] = useState("");
    const [retuen_date, setreturndate] = useState("");
    const [budget, setbudget] = useState("");
    const [created_at, setcreatedat] = useState("");
    const [updated_at, setupdatedat] = useState("");
    const [password, setPassword] = useState("");

    const onClicksubmit = () => {
      const url = "http://localhost:2000/signUp"
      const data = {
        first_name: first_name,
        last_name: Last_name,
        contact:contact,
        email:email,
        dateofbirth:dateofbirth,
        gender:gender,
        destination:destination,
        departure_date:departure_date,
        return_date:retuen_date,
        budget:budget,
        created_at:created_at,
        updated_at:updated_at,
        password:password
      };

      axios.post(url, data).then(response => {
        console.log('Response:', response.data);
  
      if (response.data == "Information submitted") {
          Alert.alert(" Data Successfully Submit")
        }
        else if (response.data == "Email Already Exists") {
          Alert.alert("Error: Data Already Submitted")
        }
      }).catch((e)=>{
  console.log(e)
      });
    }

  
    return (
  
     <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Resigstration Page</Text>
        <TextInput
          style={styles.input}
          placeholder="First_name"
          value={first_name}
          onChangeText={(text) => setfirstname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last_name"
        //   secureTextEntry={true}
          value={Last_name}
          onChangeText={(text) => setlastname(text)}
        />
           <TextInput
          style={styles.input}
          placeholder="Contact"
          value={contact}
          onChangeText={(text) => setcontact(text)}
        />
         <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setemail(text)}
          />
         <TextInput
          style={styles.input}
          placeholder="Dateofbirth"
          value={dateofbirth}
          onChangeText={(text) => setdateofbirth(text)}
        />
         <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={(text) => setgender(text)}
        />
         <TextInput
          style={styles.input}
          placeholder="Destination"
          value={destination}
          onChangeText={(text) => setdestination(text)}
        />
          <TextInput
          style={styles.input}
          placeholder="Departure_Date"
          value={departure_date}
          onChangeText={(text) => setdeparturedate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Return_date"
          value={retuen_date}
          onChangeText={(text) => setreturndate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Budget"
          value={budget}
          onChangeText={(text) => setbudget(text)}
        />
         <TextInput
          style={styles.input}
          placeholder="Created_at"
          value={created_at}
          onChangeText={(text) => setcreatedat(text)}
        />
          <TextInput
          style={styles.input}
          placeholder="Updated_at"
          value={updated_at}
          onChangeText={(text) => setupdatedat(text)}
        />
          <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={onClicksubmit} >
          <Text style={styles.buttonText} > Submit </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
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
  });
  
  export default Resigstration;
  
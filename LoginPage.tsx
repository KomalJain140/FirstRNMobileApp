import React, { useState } from 'react';
import axios from 'axios'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Button
  } from 'react-native';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = () => {
    const url = "http://localhost:2000/login"
    const data = {
      email: username.toLowerCase(),
      password: password,
    };
    axios.post(url, data).then(response => {
      console.log('Response:', response.data);

    if (response.data == "Logged In") {
        Alert.alert("Successfully Logged In")
      }
      else {
        Alert.alert("Please fill the signup foam")
      }
    }).catch((e)=>{
console.log(e)
    });
  }

  // const handleLogin = () => {
  //   // Implement your login logic here (e.g., validate credentials)
  //   if (username === 'demo' && password === 'password') {
  //     Alert.alert('Login Successful!');
  //   } else {
  //     Alert.alert('Invalid credentials. Please try again.');
  //   }
  // };

  return (

   
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onClickLogin}>
        <Text style={styles.buttonText} >Login</Text>
      </TouchableOpacity>
    </View>
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

export default Login;

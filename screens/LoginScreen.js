import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {colors} from '../src/Common/ColorPalette';
export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    // Simulating the login action with the provided phone number
    console.log('Logged in with phone number:', phoneNumber);
    // Navigate to the next screen (e.g., Home)
    navigation.navigate('Verification');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.subheader}>Welcome please login your account using mobile number</Text>

      {/* Mobile Number Input */}
      <View style={styles.inputContainer}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' }} 
          style={styles.flag} 
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Mobile number"
          keyboardType="phone-pad"
          placeholderTextColor={"#000"}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7', 
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    paddingLeft: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    height: '100%',
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

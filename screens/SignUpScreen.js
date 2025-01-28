import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {colors} from '../src/Common/ColorPalette';
export default function RegisterScreen({ navigation }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleRegister = () => {
    // Logic for registering the user
    console.log('Registering with:', { userName, email, mobileNumber });
    // Navigate to the next screen after successful registration
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>

      </TouchableOpacity>
      
      <Text style={styles.header}>Register</Text>
      <Text style={styles.subheader}>Welcome please create your account using email address</Text>

      {/* User Name Input */}
      <View style={styles.inputContainer}>
        <Image source={{uri: 'https://img.icons8.com/ios/452/user.png'}} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your user name"
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image source={{uri: 'https://img.icons8.com/ios/452/email.png'}} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Mobile Number Input */}
      <View style={styles.inputContainer}>
        <Image source={{uri: 'https://img.icons8.com/ios/452/phone.png'}} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    fontSize: 30,
    position: 'absolute',
    top: 20,
    left: 10,
    color: colors.primary,
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
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: '100%',
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

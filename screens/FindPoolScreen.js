import { colors } from '@/src/Common/ColorPalette';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function FindPoolScreen({navigation}) {
  const [sourceLocation, setSourceLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [noOfSeats, setNoOfSeats] = useState('');

  const handleFindPool = () => {
    // Logic for finding pool
    console.log('Finding pool with the following details:');
    console.log('Source:', sourceLocation);
    console.log('Destination:', destinationLocation);
    console.log('Date & Time:', dateTime);
    console.log('Seats:', noOfSeats);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find your pool</Text>
      <Text style={styles.subHeader}>
        You full and comfortable travel, share your journey with all like you
      </Text>

      {/* Source location */}
      <TouchableOpacity style={[{width:"100%"},styles.input]} onPress={()=>navigation.navigate("MapScreen")}>
        <View><Text>Source Location</Text></View>      
   </TouchableOpacity>


      {/* Destination location */}
      <TextInput
        style={styles.input}
        placeholder="Destination location"
        value={destinationLocation}
        onChangeText={setDestinationLocation}
        placeholderTextColor={`#000`}
      />

      {/* Date & time */}
      <TextInput
        style={styles.input}
        placeholder="Date & time"
        value={dateTime}
        onChangeText={setDateTime}
        placeholderTextColor={`#000`}
      />

      {/* Number of seats */}
      <TextInput
        style={styles.input}
        placeholder="No of seat"
        keyboardType="numeric"
        value={noOfSeats}
        onChangeText={setNoOfSeats}
        placeholderTextColor={`#000`}
      />

      {/* Find pool button */}
      <TouchableOpacity style={styles.button} onPress={handleFindPool}>
        <Text style={styles.buttonText}>Find pool</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    justifyContent:"center"
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

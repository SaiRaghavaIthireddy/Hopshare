import { colors } from '@/src/Common/ColorPalette';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function OfferPoolScreen() {
  const [sourceLocation, setSourceLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleContinue = () => {
    // Logic for offering the pool
    console.log('Offering pool with the following details:');
    console.log('Source:', sourceLocation);
    console.log('Destination:', destinationLocation);
    console.log('Date & Time:', dateTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create your pool</Text>
      <Text style={styles.subHeader}>
        Share your car journey with co-travelers just like you and cover all fuel costs
      </Text>

      {/* Source location */}
      <TextInput
        style={styles.input}
        placeholder="Source location"
        value={sourceLocation}
        onChangeText={setSourceLocation}
      />

      {/* Destination location */}
      <TextInput
        style={styles.input}
        placeholder="Destination location"
        value={destinationLocation}
        onChangeText={setDestinationLocation}
      />

      {/* Date & Time */}
      <TextInput
        style={styles.input}
        placeholder="Date & time"
        value={dateTime}
        onChangeText={setDateTime}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
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

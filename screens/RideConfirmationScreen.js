import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function RideConfirmationScreen({ route, navigation }) {
  const { pickup, dropoff, rideType, fareEstimate } = route.params;

  const handleRideStart = () => {
    // Logic to handle ride start, like tracking or sending notifications
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride Confirmation</Text>
      <Text>Pick-up: {pickup}</Text>
      <Text>Drop-off: {dropoff}</Text>
      <Text>Ride Type: {rideType}</Text>
      <Text>Fare Estimate: {fareEstimate}</Text>

      <Button title="Start Ride" onPress={handleRideStart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

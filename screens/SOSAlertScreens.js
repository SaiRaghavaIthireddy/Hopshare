import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SOSAlertScreen() {
  const userLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const handleSOSAlert = () => {
    console.log('SOS Alert triggered!');
    // Logic to send the alert (e.g., notify emergency contacts, police)
  };

  const handleCancelSOS = () => {
    console.log('SOS Alert canceled.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SOS Alert</Text>

      <Text style={styles.detailText}>Trigger an emergency alert for help.</Text>

      <MapView style={styles.map} initialRegion={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {/* User's location marker */}
        <Marker coordinate={userLocation} title="Your Location" />
        {/* Example: Nearby assistance marker */}
        <Marker coordinate={{ latitude: 37.78865, longitude: -122.4315 }} title="Police Station" />
      </MapView>

      <Button title="Trigger SOS Alert" onPress={handleSOSAlert} />
      <Button title="Cancel SOS" onPress={handleCancelSOS} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

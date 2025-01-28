import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function HomeScreen({ navigation }) {
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,  // Default latitude
    longitude: -122.4324,  // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [availableRides, setAvailableRides] = useState([]);

  const handleFindRide = () => {
    // Placeholder for search logic, will query available carpools based on startLocation and destination
    console.log(`Finding rides from ${startLocation} to ${destination}`);
    // Assume we find some rides here
    setAvailableRides([
      { id: 1, driver: 'John', car: 'Toyota Corolla', availableSeats: 2 },
      { id: 2, driver: 'Jane', car: 'Honda Civic', availableSeats: 3 },
    ]);
    navigation.navigate('RideConfirmation', { availableRides });
  };

  // Request current location when the component mounts
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        // Update region to center the map on user's current location
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        console.log('Permission to access location was denied');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search for a Ride</Text>

      {/* Input fields for Start Location and Destination */}
      <TextInput
        style={styles.input}
        placeholder="Enter Start Location"
        value={startLocation}
        onChangeText={setStartLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Destination"
        value={destination}
        onChangeText={setDestination}
      />

      {/* Map view to select locations interactively */}
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)} // Updating the region with user interaction
      >
        {/* Marker for the current location */}
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} title="Start Location" />
      </MapView>

      {/* Button to trigger ride search */}
      <Button title="Find Ride" onPress={handleFindRide} />

      {/* Display available rides */}
      {availableRides.length > 0 && (
        <View style={styles.rideList}>
          <Text style={styles.rideListHeader}>Available Rides:</Text>
          {availableRides.map((ride) => (
            <Text key={ride.id}>
              {ride.driver} - {ride.car} ({ride.availableSeats} seats available)
            </Text>
          ))}
        </View>
      )}
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
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  rideList: {
    marginTop: 20,
  },
  rideListHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

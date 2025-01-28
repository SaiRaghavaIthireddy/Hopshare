import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SearchResultsScreen({ route, navigation }) {
  // Default mock data for available rides
  const availableRides = [
    {
      id: 1,
      driver: 'John',
      vehicleType: 'Toyota Corolla',
      price: 20,
      eta: 15,
      rating: 4.5,
      location: { latitude: 37.78825, longitude: -122.4324 }, // Example coordinates
    },
    {
      id: 2,
      driver: 'Jane',
      vehicleType: 'Honda Civic',
      price: 25,
      eta: 10,
      rating: 4.7,
      location: { latitude: 37.78895, longitude: -122.4335 },
    },
    {
      id: 3,
      driver: 'Tom',
      vehicleType: 'Ford Mustang',
      price: 30,
      eta: 20,
      rating: 4.8,
      location: { latitude: 37.78925, longitude: -122.4344 },
    },
  ];

  const [isMapView, setIsMapView] = useState(true); // Toggle between map and list view

  const handleSelectRide = (ride) => {
    console.log(`Selected Ride: ${ride.driver}`);
    // Navigate to the ride confirmation screen with ride details
    navigation.navigate('RideConfirmation', { ride });
  };

  // Function to switch between map and list view
  const toggleView = () => {
    setIsMapView(!isMapView);
  };

  return (
    <View style={styles.container}>
      {/* Toggle button to switch between map and list view */}
      <Button title={isMapView ? 'Switch to List View' : 'Switch to Map View'} onPress={toggleView} />

      {/* Conditional rendering for MapView or ListView */}
      {isMapView ? (
        <MapView style={styles.map}>
          {availableRides.map((ride) => (
            <Marker
              key={ride.id}
              coordinate={ride.location}
              title={ride.driver}
              description={`${ride.vehicleType} - $${ride.price}`}
            />
          ))}
        </MapView>
      ) : (
        <FlatList
          data={availableRides}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.rideItem}>
              <Text style={styles.rideHeader}>{item.driver}</Text>
              <Text>Vehicle: {item.vehicleType}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>ETA: {item.eta} mins</Text>
              <Text>Rating: {item.rating} ⭐</Text>
              <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectRide(item)}>
                <Text style={styles.buttonText}>Select Ride</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  rideItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  rideHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

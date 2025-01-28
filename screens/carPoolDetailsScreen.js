import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function CarpoolDetailsScreen({ route, navigation }) {
//   const { ride } = route.params; // Receive the selected ride's details passed from the previous screen
const ride ={id: 1,
    driver: 'John Doe',
    vehicleType: 'Toyota Corolla',
    price: 25, // USD
    capacity: 3, // Number of seats
    rating: 4.8, // Out of 5
    eta: 12, // Estimated time of arrival in minutes
    driverPhone: '123-456-7890', // Example phone number
    startLocation: {
      latitude: 37.7749, // Latitude of start location (San Francisco)
      longitude: -122.4194, // Longitude of start location
    },
    destination: {
      latitude: 37.7749, // Latitude of destination (also San Francisco for this example)
      longitude: -122.4313, // Longitude of destination
    },  id: 2,
    driver: 'Jane Smith',
    vehicleType: 'Honda Civic',
    price: 20, // USD
    capacity: 4, // Number of seats
    rating: 4.6, // Out of 5
    eta: 15, // ETA in minutes
    driverPhone: '987-654-3210', // Example phone number
    startLocation: {
      latitude: 37.8044, // Latitude of start location (Oakland)
      longitude: -122.2711, // Longitude of start location
    },
    destination: {
      latitude: 37.7849, // Latitude of destination (San Francisco)
      longitude: -122.4313, // Longitude of destination
    },}
  const handleBookRide = () => {
    // Implement your booking logic here
    console.log('Booking ride...');
    // Navigate to confirmation or booking screen
    navigation.navigate('RideConfirmation', { ride });
  };

  const handleContactDriver = () => {
    // Implement logic to contact the driver (e.g., call, send message)
    Linking.openURL(`tel:${ride.driverPhone}`); // Assuming the ride has a driver's phone number
  };

  // Example polyline coordinates (for illustration, simulate a route from start to destination)
  const routeCoordinates = [
    { latitude: ride.startLocation.latitude, longitude: ride.startLocation.longitude },
    { latitude: ride.destination.latitude, longitude: ride.destination.longitude },
  ];

  return (
    <View style={styles.container}>
      {/* Display carpool details */}
      <Text style={styles.header}>Carpool Details</Text>

      <Text style={styles.detailText}>Driver: {ride.driver}</Text>
      <Text style={styles.detailText}>Vehicle: {ride.vehicleType}</Text>
      <Text style={styles.detailText}>Price: ${ride.price}</Text>
      <Text style={styles.detailText}>Capacity: {ride.capacity} seats</Text>
      <Text style={styles.detailText}>Rating: {ride.rating} ⭐</Text>
      <Text style={styles.detailText}>ETA: {ride.eta} mins</Text>

      {/* Map View showing the route */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: ride.startLocation.latitude,
          longitude: ride.startLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Markers for start and destination */}
        <Marker coordinate={ride.startLocation} title="Start Location" />
        <Marker coordinate={ride.destination} title="Destination" />

        {/* Polyline for route */}
        <Polyline coordinates={routeCoordinates} strokeColor="#000" strokeWidth={3} />
      </MapView>

      {/* Actions */}
      <Button title="Book Ride" onPress={handleBookRide} />
      <Button title="Contact Driver" onPress={handleContactDriver} />
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
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
});

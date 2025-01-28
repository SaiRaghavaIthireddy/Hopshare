import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

export default function BookingConfirmationScreen({ route, navigation }) {
//   const { ride } = route.params; // Get the selected ride details
const ride = {
    id: 1,
    driver: 'John Doe', // Driver's name
    vehicleType: 'Toyota Corolla', // Vehicle type
    price: 25, // Ride price in USD
    eta: 12, // Estimated time of arrival (in minutes)
    startLocation: {
      latitude: 37.78825, // Start location latitude (e.g., San Francisco)
      longitude: -122.4324, // Start location longitude
    },
    destination: {
      latitude: 37.7848, // Destination latitude (e.g., San Francisco)
      longitude: -122.4219, // Destination longitude
    },
    driverPhone: '123-456-7890', // Driver's phone number (for contact)
  };
  const [userLocation, setUserLocation] = useState(null); // Store user location
  const [driverLocation, setDriverLocation] = useState(ride.startLocation); // Initial driver location is the start location

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    })();
  }, []);

  const handleCancelBooking = () => {
    // Logic to cancel booking
    console.log('Booking canceled');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking Confirmation</Text>

      <Text style={styles.detailText}>Driver: {ride.driver}</Text>
      <Text style={styles.detailText}>Vehicle: {ride.vehicleType}</Text>
      <Text style={styles.detailText}>Price: ${ride.price}</Text>
      <Text style={styles.detailText}>ETA: {ride.eta} mins</Text>

      {/* Map showing user and driver locations */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation ? userLocation.latitude : 37.78825,
          longitude: userLocation ? userLocation.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Markers for driver and user */}
        {userLocation && (
          <Marker coordinate={userLocation} title="Your Location" />
        )}
        <Marker coordinate={driverLocation} title="Driver's Location" />

        {/* Polyline showing the route (start to destination) */}
        <Polyline
          coordinates={[driverLocation, ride.destination]}
          strokeColor="#000"
          strokeWidth={3}
        />
      </MapView>

      {/* Cancel Booking button */}
      <Button title="Cancel Booking" onPress={handleCancelBooking} />
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

import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

export default function UserProfileScreen() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    paymentMethods: ['Credit Card', 'PayPal'],
  };

  const rideHistory = [
    { id: 1, date: '2021-08-01', destination: 'San Francisco', rating: 4.5 },
    { id: 2, date: '2021-07-25', destination: 'Oakland', rating: 4.7 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Payment Methods:</Text>
      <FlatList
        data={user.paymentMethods}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.subHeader}>Ride History:</Text>
      <FlatList
        data={rideHistory}
        renderItem={({ item }) => (
          <View style={styles.rideItem}>
            <Text>Date: {item.date}</Text>
            <Text>Destination: {item.destination}</Text>
            <Text>Rating: {item.rating} ⭐</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Button title="Update Preferences" onPress={() => console.log('Update preferences')} />
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
  subHeader: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  rideItem: {
    marginBottom: 10,
  },
});

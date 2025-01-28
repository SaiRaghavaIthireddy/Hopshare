import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function NotificationsScreen() {
  const notifications = [
    { id: 1, message: 'Your ride is confirmed. Driver: John Doe' },
    { id: 2, message: 'Ride update: ETA 5 mins' },
    { id: 3, message: 'Emergency Alert: Safety precautions required!' },
    { id: 4, message: 'New promotional offer: Get 20% off your next ride!' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
  notificationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
});

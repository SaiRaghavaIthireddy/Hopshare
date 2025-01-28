import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// Sample Data for the pools
const tripData = [
  {
    id: '1',
    name: 'Hawken',
    date: 'Today | 10:30 pm',
    source: '6391 Elgin St. Celina',
    destination: '2464 Royal Ln. Mesa',
    image: 'https://via.placeholder.com/40',
  },
  {
    id: '2',
    name: 'Wilson',
    date: '22 June | 10:30 pm',
    source: '6391 Elgin St. Celina',
    destination: '2464 Royal Ln. Mesa',
    image: 'https://via.placeholder.com/40',
  },
  {
    id: '3',
    name: 'Elen',
    date: '23 June | 10:30 pm',
    source: '6391 Elgin St. Celina',
    destination: '2464 Royal Ln. Mesa',
    image: 'https://via.placeholder.com/40',
  },
  {
    id: '4',
    name: 'Jacob',
    date: '24 June | 10:30 pm',
    source: '6391 Elgin St. Celina',
    destination: '2464 Royal Ln. Mesa',
    image: 'https://via.placeholder.com/40',
  },
  {
    id: '5',
    name: 'Jenny',
    date: '25 June | 10:30 pm',
    source: '6391 Elgin St. Celina',
    destination: '2464 Royal Ln. Mesa',
    image: 'https://via.placeholder.com/40',
  },
];

const MyPoolScreen = () => {
  const renderTripItem = ({ item }) => (
    <View style={styles.tripItem}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.tripDetails}>
        <Text style={styles.tripDate}>{item.date}</Text>
        <Text style={styles.tripLocation}>
          <Text style={styles.greenDot}>●</Text> {item.source} {'\n'}
          <Text style={styles.redDot}>●</Text> {item.destination}
        </Text>
        <TouchableOpacity style={styles.poolInfoButton}>
          <Text style={styles.poolInfoText}>Pool info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tripData}
        renderItem={renderTripItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  tripItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  tripDetails: {
    flex: 1,
  },
  tripDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tripLocation: {
    fontSize: 14,
    color: '#777',
  },
  greenDot: {
    color: 'green',
  },
  redDot: {
    color: 'red',
  },
  poolInfoButton: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#D84B4B',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  poolInfoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MyPoolScreen;

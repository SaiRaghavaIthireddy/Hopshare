import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyPoolScreen from './MyPoolScreen';
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
];

const Tab = createMaterialTopTabNavigator();



// Screen for Request for Pool
const RequestPoolScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noPoolText}>No requests for pool yet.</Text>
    </View>
  );
};

export default function MyTripScreen() {
  return (

      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          labelStyle: { fontWeight: 'bold' },
          style: { backgroundColor: '#D84B4B' },
        }}
      >
        <Tab.Screen name="My Pool" component={MyPoolScreen} />
        <Tab.Screen name="Request for Pool" component={RequestPoolScreen} />
      </Tab.Navigator>
  
  );
}

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
  noPoolText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

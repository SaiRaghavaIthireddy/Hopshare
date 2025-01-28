import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyPoolScreen from './MyPoolScreen';
import RequestForPool from './RequestForPool';
// Sample Data for the pools


const Tab = createMaterialTopTabNavigator();



// Screen for Request for Pool


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
        <Tab.Screen name="Request for Pool" component={RequestForPool} />
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

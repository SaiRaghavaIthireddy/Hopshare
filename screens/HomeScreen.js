import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

// Screens for each tab
import FindPoolScreen from "../screens/FindPoolScreen"
import OfferPoolScreen from "../screens/OfferPoolScreen"
import MyTripScreen from "../screens/MyTripScreen"
import ProfileScreen from "../screens/ProfileScreen"
// import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#fff', height: 60 },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Find Pool"
          component={FindPoolScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Offer Pool"
          component={OfferPoolScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="car" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="My Trip"
          component={MyTripScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="briefcase" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

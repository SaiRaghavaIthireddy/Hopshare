import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen'; // Add your HomeScreen here
import RideConfirmationScreen from "../screens/RideConfirmationScreen" // Add your RideConfirmationScreen here
import onboardingScreen from "../screens/OnboardingScreen"; // Add onboarding or any initial setup screen
import SplashScreen from "../screens/SplashScreen"; // Add SplashScreen
import LoginScreen from "../screens/LoginScreen"; // Add LoginScreen
import SignUpScreen from "../screens/SignUpScreen"; // Add SignUpScreen
import SearchResultScreen from "../screens/SearchResultsScreens"; // Add SearchResultScreen
import carPoolDetailsScreen from "../screens/carPoolDetailsScreen"; // Add carPoolDetailsScreen
import BookingConfirmationScreen from "../screens/BookingConfirmationScreen"; // Add BookingConfirmationScreen
import UserProfileScreen from "../screens/UserProfileScreen"; // Add UserProfileScreen
import SOSAlertScreens from  "../screens/SOSAlertScreens"; // Add SOSAlertScreens
import RatingsScreen from "../screens/RatingsScreen"
import Notifications from "../screens/NotificationScreen"
const Stack = createStackNavigator();

export default function App() {
  return (

      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={onboardingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SearchResults" component={SearchResultScreen} />
          <Stack.Screen name="RideConfirmation" component={RideConfirmationScreen} />   
          <Stack.Screen name="carPoolDetailsScreen" component={carPoolDetailsScreen} />  
          <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="SOSAlert" component={SOSAlertScreens} />
          <Stack.Screen name="Ratings" component={RatingsScreen} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

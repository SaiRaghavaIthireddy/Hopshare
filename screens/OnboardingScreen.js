import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { colors } from '../src/Common/ColorPalette';

export default function OnboardingScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Step 1: Welcome */}
      <View style={styles.slide}>
        <Text style={styles.heading}>Welcome to HopShare</Text>
        <Text style={styles.description}>
          Share or request rides with ease and get to your destination in no time!
        </Text>
      </View>

      {/* Step 2: Offer CarPool */}
      <View style={styles.slide}>
        <Text style={styles.heading}>Offer CarPool</Text>
        <Text style={styles.description}>
          Share your ride with others and cover fuel costs. Offer a ride today!
        </Text>
        <Button title="Offer CarPool" onPress={() => navigation.navigate('OfferPool')} />
      </View>

      {/* Step 3: Request for CarPool */}
      <View style={styles.slide}>
        <Text style={styles.heading}>Request for CarPool</Text>
        <Text style={styles.description}>
          Looking for a ride? Request a pool with nearby users!
        </Text>
        <Button title="Request CarPool" onPress={() => navigation.navigate('RequestPool')} />
      </View>

      {/* Get Started Button */}
      <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  slide: {
    marginBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 30,
    width: '80%',
  },
});

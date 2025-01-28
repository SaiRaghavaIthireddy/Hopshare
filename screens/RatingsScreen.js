import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

export default function RatingScreen() {
  const [rating, setRating] = useState(3); // Initial rating

  const handleRatingCompleted = (rating) => {
    console.log('Rating completed: ', rating);
    setRating(rating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rate Your Experience</Text>

      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={30}
        onFinishRating={handleRatingCompleted}
      />

      <Text>Current Rating: {rating} ⭐</Text>

      <Button title="Submit Feedback" onPress={() => console.log('Feedback submitted')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

// screens/GuestScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GuestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Guest!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

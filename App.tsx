

import React from 'react';
import { View, StyleSheet } from 'react-native';
import DroneToggleButton from './DroneToggleButton';
import DroneControl from './src/DroneControl'; // Adjust the import path as necessary

const App = () => {
 const toggleDrone = async (isOn: any) => {
    const url = 'https://your-drone-api.com/toggle'; // Replace with your actual API endpoint
    const method = isOn ? 'POST' : 'DELETE'; // Assuming POST to turn on and DELETE to turn off

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to toggle drone');
      }

      console.log('Drone toggled successfully');
    } catch (error) {
      console.error('Error toggling drone:', error);
    }
 };

 return (
    <View style={styles.container}>
    <DroneToggleButton onToggle={toggleDrone} />
    <DroneControl />
  </View>
 );
};


const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
});

export default App;
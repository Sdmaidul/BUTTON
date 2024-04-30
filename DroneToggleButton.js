import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DroneToggleButton = ({ onToggle }) => {
 const [isOn, setIsOn] = useState(false);

 const toggleDrone = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
 };

 return (
    <TouchableOpacity style={styles.button} onPress={toggleDrone}>
      <Text style={styles.text}>{isOn ? 'OFF' : 'ON'}</Text>
    </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 5,
    margin: 10,
 },
 text: {
    fontSize: 20,
 },
});

export default DroneToggleButton;

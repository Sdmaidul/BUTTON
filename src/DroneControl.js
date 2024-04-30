import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DroneControl = () => {
    const handleTakeoff = () => {
        fetch('https://your-drone-api.com/takeoff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                command: 'takeoff',
            }),
        })
        .then(response => response.json())
        .then(data => console.log('Takeoff command sent:', data))
        .catch(error => console.error('Error sending takeoff command:', error));
    };

    const handleLand = () => {
        fetch('https://your-drone-api.com/land', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                command: 'land',
            }),
        })
        .then(response => response.json())
        .then(data => console.log('Land command sent:', data))
        .catch(error => console.error('Error sending land command:', error));
    };

    const handleReturn = () => {
        fetch('https://your-drone-api.com/return', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                command: 'return',
            }),
        })
        .then(response => response.json())
        .then(data => console.log('Return command sent:', data))
        .catch(error => console.error('Error sending return command:', error));
    };

    const handleGoto = () => {
        const coordinates = {
            latitude: 12.34,
            longitude: 56.78,
        };

        fetch('https://your-drone-api.com/goto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                command: 'goto',
                coordinates: coordinates,
            }),
        })
        .then(response => response.json())
        .then(data => console.log('GOTO command sent:', data))
        .catch(error => console.error('Error sending GOTO command:', error));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleTakeoff}>
                <Text style={styles.text}>TAKEOFF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLand}>
                <Text style={styles.text}>LAND</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleReturn}>
                <Text style={styles.text}>RETURN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleGoto}>
                <Text style={styles.text}>GOTO</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // This aligns children in a row
        justifyContent: 'space-around', // This spaces the buttons evenly across the row
        alignItems: 'center', // This centers the buttons vertically
        backgroundColor: '#F5FCFF',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});

export default DroneControl;

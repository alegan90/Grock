import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Groceries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading:{
    color:'#0f6e38',
    fontSize:20,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});

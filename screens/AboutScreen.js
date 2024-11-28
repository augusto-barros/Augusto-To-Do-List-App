import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About the App</Text>
        <Text style={styles.description}>
          Hello, if you are here, you are probably looking for a to-do list app.
          You are in the right place! This app was created by Augusto Antunes Barros. 
          It is a simple to-do list app that allows you to add tasks, mark them as completed, 
          and delete them. Enjoy!
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.easterEggButton} 
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")}
        >
          <Text style={styles.buttonText}>Easter Egg</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'HelveticaNeue', 
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#7f8c8d',
    lineHeight: 25,
    fontFamily: 'HelveticaNeue',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  easterEggButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});

export default AboutScreen;

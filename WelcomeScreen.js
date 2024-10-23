// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
     
      <Text style={styles.heading}>Limat Technology Solutions</Text>

     
      <Image source={{uri:'https://limat-tech.com/wp-content/uploads/sites/236/elementor/thumbs/2-EDITED-LOGO-p6q56jyoyyo5w1oc8jk6tv1sk34ctexu3g9gumqpiw.png'}} style={styles.logo} />

      {/* Welcome sub-heading */}
      <Text style={styles.subHeading}>Welcome to Limat Technology Solutions</Text>

      
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button 
            title="Guest Mode" 
            onPress={() => navigation.navigate('Guest')} 
            color={styles.guestButton.color} 
          />
        </View>
        <View style={styles.buttonSpacing} />
        <View style={styles.button}>
          <Button 
            title="Login" 
            onPress={() => navigation.navigate('Login')} 
            color={styles.loginButton.color} 
          />
        </View>
      </View>

      {/* Pressable text for new account registration */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.registerText}>New Register here</Text>
      </TouchableOpacity>

      {/* Contact and email at the bottom */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Contact: 908880764</Text>
        <Text style={styles.emailText}>Email: limattech@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E0FFFF',  
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2F4F4F',  
    position: 'absolute',
    top: '15%',
  },
  logo: {
    width: 250,
    height: 120,  
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#2F4F4F',  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonSpacing: {
    width: 20,  // Space between the two buttons
  },
  button: {
    flex: 1,
  },
  guestButton: {
    color: '#008080', 
  },
  loginButton: {
    color: '#008080',  
  },
  registerText: {
    fontSize: 16,
    color: '#008080',  
    marginBottom: 30,
  },
  contactContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contactText: {
    fontSize: 14,
    color: '#2F4F4F',  
  },
  emailText: {
    fontSize: 14,
    color: '#2F4F4F', 
  },
});





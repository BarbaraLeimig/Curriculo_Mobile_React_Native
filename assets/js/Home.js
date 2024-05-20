// SobreRestaurante.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';

const Home = () => {

  /* fazer aqui um const linkedin e cons github, depois faze o esquema que nem o navigate do App.js */
  
    const linkedin = () => {
      Linking.openURL('https://www.linkedin.com/in/barbaraleimig/');
    };
    const github = () => {
      Linking.openURL('https://github.com/BarbaraLeimig');
    };
  

  return (
    <View style={styles.container}> 
      <Image source={require('../imgs/barbara.jpg')} style={styles.homeImage} />
      <Text style={styles.title}>Bárbara Leimig</Text>
      <Text style={styles.info}>Associate Full Stack Developer</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={linkedin}>
          <FontAwesome style={styles.icon} name="linkedin" size={37} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={github}> 
          <Entypo name="github" size={37} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 45,
    marginBottom: 5,
  },
  info: {
    fontSize: 20,
    marginBottom: 10,
  },
  homeImage: {
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    resizeMode: "cover",
  },
  iconContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItens: "baseline", 
  },
  icon: {
    marginRight: 25,
    marginLeft: 25, 
  }
});

export default Home;

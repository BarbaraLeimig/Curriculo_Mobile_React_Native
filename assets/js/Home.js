import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";

const Home = () => {
  const linkedin = () => {
    Linking.openURL("https://www.linkedin.com/in/barbaraleimig/");
  };
  const github = () => {
    Linking.openURL("https://github.com/BarbaraLeimig");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../imgs/barbara.jpg")} style={styles.homeImage} />
      <Text style={styles.title}>Bárbara Leimig</Text>
      <Text style={styles.info}>Associate Full Stack Developer</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={linkedin}>
          <FontAwesome
            style={styles.icon}
            name="linkedin"
            size={37}
            color="black"
          />
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
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  info: {
    fontSize: 20,
    marginBottom: 20,
    color: "#666",
  },
  homeImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Home;

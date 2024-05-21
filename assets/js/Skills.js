import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Skills = () => {
  const technologies = [
    { name: "C#", image: require("../imgs/csharp.png") },
    { name: "ASP.NET", image: require("../imgs/aspdotnet.png") },
    { name: "Node.js", image: require("../imgs/nodejs.png") },
    { name: "Azure", image: require("../imgs/azure.png") },
    { name: "SQL Server", image: require("../imgs/sql.png") },
    { name: "MongoDB", image: require("../imgs/mongodb.png") },
    { name: "MySQL", image: require("../imgs/mysql.png") },
    { name: "Postgres", image: require("../imgs/postgresql.png") },
    { name: "Python", image: require("../imgs/python.png") },
    { name: "Power BI", image: require("../imgs/powerbi.png") },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      {technologies.map((tech, index) => (
        <View key={index} style={styles.techContainer}>
          <Image source={tech.image} style={styles.techImage} />
          <Text style={styles.techName}>{tech.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  techContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  techImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    resizeMode: "cover",
    marginBottom: 5,
  },
  techName: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Skills;

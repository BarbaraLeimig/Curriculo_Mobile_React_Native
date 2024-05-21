import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Education = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formações</Text>
      <View style={styles.flexContainer}>
        <View style={styles.containerEducation}>
          <Text style={styles.titleEducation}>Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.info}>
          02/2023 – Atual | Faculdade SENAC Pernambuco
          </Text>
        </View>
        <View style={styles.containerEducation}>
          <Text style={styles.titleEducation}>Residência em Odontopediatria com Ênfase em Pacientes com Deficiência</Text>
          <Text style={styles.info}>
          03/2020 – 02/2022 | IMIP
          </Text>
        </View>
        <View style={styles.containerEducation}>
          <Text style={styles.titleEducation}>Graduação em Odontologia</Text>
          <Text style={styles.info}>
            02/2014 – 12/2018 | UFPE
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  flexContainer: {
    flex: 1,
  },
  containerEducation: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 3,
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
  },
  titleEducation: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    lineHeight: 22,
    color: "#666",
    textAlign: "center",
  },
});

export default Education;

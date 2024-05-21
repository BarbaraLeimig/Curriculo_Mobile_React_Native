// SobreRestaurante.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre Mim</Text>
      <Text style={styles.info}>
        Sou uma profissional em transição de carreira, com formação em
        Odontologia. Atualmente curso Análise e Desenvolvimento de Sistemas e
        faço estágio na área de Tecnologia trabalhando com .NET para
        desenvolvimento web. Sou apaixonada pela área e movida pela curiosidade,
        o que me impulsiona a buscar novos desafios e oportunidades para
        adquirir conhecimento. Minha experiência prévia como Dentista me
        proporcionou desenvolver habilidades interpessoais de comunicação,
        adaptabilidade e gestão de tempo.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  info: {
    fontSize: 18,
    lineHeight: 26,
    marginVertical: 10,
    textAlign: "justify",
    color: "#444",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    elevation: 3,
  },
});

export default AboutMe;

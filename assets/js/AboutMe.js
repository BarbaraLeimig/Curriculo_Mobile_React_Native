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
        adiquirir conhecimento. Minha experiência prévia como Dentista me
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
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    margin: 10,
    textAlign: "justify",
    color: "#444",
  },
});

export default AboutMe;

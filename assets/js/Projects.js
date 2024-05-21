// Projects.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

const projects = [
  {
    title: "Sistema de Estacionamento",
    description:
      "Projeto cosole desenvolvido em C# e .NET para apresentação na entrevista do atual estágio",
    image: require("../imgs/sistema_estacionamento.png"),
    githubUrl:
      "https://github.com/BarbaraLeimig/Sistema-Estacionamento-NET-desafio.git",
  },
  {
    title: "Word Puzzle Game",
    description:
      "Projeto web em JavaScript desenvolvido durante a primeira etapa de treinamento do estágio",
    image: require("../imgs/word_puzzle.png"),
    githubUrl:
      "https://github.com/BarbaraLeimig/Projeto_Front_TreinamentoImpacta_Word_Puzzle_Game.git",
  },
  {
    title: "Gerenciador de Tarefas",
    description:
      "Projeto web desenvolvido em JavaScript e Node.js para gerenciar tarefas do Curso FAP Back-End da Softex Pernambuco",
    image: require("../imgs/gerencia_fap.png"),
    githubUrl: "https://github.com/BarbaraLeimig/gerencia-fap.git",
  },
  {
    title: "Short Videos App",
    description:
      "Projeto web desenvolvido em Javascript e React, com integração ao banco de dadoas Firebase, para criação de uma interface de aplicativo de vídeos curtos",
    image: require("../imgs/shortvideosapp.png"),
    githubUrl:
      "https://github.com/BarbaraLeimig/Projeto_Interface_ShortVideosApp.git",
  },
  {
    title: "DS Movie",
    description:
      "Meu primeiro projeto web desenvolvido em React, JavaScript e Bootstrap, consistindo em uma página para avaliação de filmes",
    image: require("../imgs/dsmovie.png"),
    githubUrl: "https://github.com/BarbaraLeimig/dsmovie.git",
  },
];

const Projects = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      {projects.map((project, index) => (
        <View key={index} style={styles.projectContainer}>
          <Image source={project.image} style={styles.projectImage} />
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(project.githubUrl)}
          >
            <Text style={styles.buttonText}>Ver no GitHub</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  projectContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    justifyContent: "center", 
    alignItems: "center",
  },
  projectImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: "cover",
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: "#555",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Projects;

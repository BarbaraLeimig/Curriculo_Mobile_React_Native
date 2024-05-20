import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AboutMe from "./assets/js/AboutMe";
import Education from "./assets/js/Education"
import Skills from "./assets/js/Skills";
import Projects from "./assets/js/Projects";
import Home from "./assets/js/Home";

const App = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [currentPage, setcurrentPage] = useState("Início");

  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };

  const navigateTo = (page) => {
    setcurrentPage(page);
    setopenMenu(false);
  };

  // Renderização condicional da página atual
  const renderPage = () => {
    switch (currentPage) {
      case "Início":
        return <Home />;
      case "Sobre Mim":
        return <AboutMe />;
      case "Formação":
        return <Education />;
      case "Habilidades":
        return <Skills />;
      case "Projetos":
        return <Projects />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Portfolio</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {openMenu && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Início")}
          >
            <Text style={styles.menuItemText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Sobre Mim")}
          >
            <Text style={styles.menuItemText}>Sobre Mim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Formação")}
          >
            <Text style={styles.menuItemText}>Formação</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Habilidades")}
          >
            <Text style={styles.menuItemText}>Habildiades</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Projetos")}
          >
            <Text style={styles.menuItemText}>Projetos</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Content */}
      <View style={styles.content}>{renderPage()}</View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigateTo("Início")}>
          <MaterialCommunityIcons name="home-circle" size={46} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "rgb(245,245,245)",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 16,
    textAlign: "right",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(245,245,245)",
  },
});

export default App;

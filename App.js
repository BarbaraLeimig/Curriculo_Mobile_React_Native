import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AboutMe from "./assets/js/AboutMe";
import Education from "./assets/js/Education";
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

  const renderPage = () => {
    switch (currentPage) {
      case "Início":
        return <Home />;
      case "Sobre Mim":
        return <AboutMe />;
      case "Formações":
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
        <Text style={styles.title}>Portfolio</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <MaterialCommunityIcons name="menu" size={30} color="black" />
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
            onPress={() => navigateTo("Formações")}
          >
            <Text style={styles.menuItemText}>Formações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Habilidades")}
          >
            <Text style={styles.menuItemText}>Habilidades</Text>
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
      <ScrollView contentContainerStyle={styles.content}>
        {renderPage()}
      </ScrollView>

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
    backgroundColor: "#f5f5f5",
    paddingTop: 27,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 3,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemText: {
    fontSize: 16,
    color: "#555",
    textAlign: "right",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 3,
  },
  footerIcon: {
    padding: 10,
  },
});

export default App;

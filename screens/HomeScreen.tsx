import {SafeAreaView, ScrollView, StyleSheet, TextInput} from "react-native";
import { RootTabScreenProps } from "../types";
import React from "react";
import AnimalPicker from "../components/AnimalPicker";
import { LinearGradient } from "expo-linear-gradient";
import { ChangeUsername } from "../components/ChangeUsername";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {

  return (
    <LinearGradient style={styles.cardContainer}
                    colors={["#50d1ff", "#9a3aff"]} locations={[0, 1]} start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
      <SafeAreaView>
        <ScrollView>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "comfortaa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  },
  paragraph: {},
  button: {},
  image: {
    flex: 1,
    justifyContent: "center"

  },
  input: {
    color: "black",
    backgroundColor: "white",
    fontFamily: "Arial"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "comfortaa",
    backgroundColor: "#000000c0"
  },
  card: {
    borderRadius: 6,
  }

});

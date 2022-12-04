import { Button, ImageBackground, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import React, { useEffect, useState } from "react";
import AnimalPicker from "../components/AnimalPicker";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-elements";
import ThemedCard from "react-native-elements/dist/card/Card";
import { ChangeUsername } from "../components/ChangeUsername";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {

  return (
    <LinearGradient style={styles.container}
      // Button Linear Gradient
                    colors={["#0085A6", "#1C39AE", "#5106B5"]} locations={[0.2, 0.5, 0.8]} start={{ x: .5, y: .2 }}
                    end={{ x: 1, y: 1 }}>
      <SafeAreaView>
        <ChangeUsername />
        <AnimalPicker />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  bgImg: {
    height: "448px",
    width: "207px"
  }
});

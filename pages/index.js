import { useState } from "react";
import useSWR from "swr";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ImageBackground,
} from "react-native";
import * as path from "path";

const fetcher = () =>
  fetch("/api/scores/list").then((response) => response.json());

export default function Home() {
  const { data, mutate } = useSWR("", fetcher);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const source={ uri: require('../public/backgroundLight.jpg') };
console.log()
  return (
    <View style={styles.container}>
      <ImageBackground source={source.uri.default.src} style={styles.image}>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"

  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
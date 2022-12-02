import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
} from "react-native-web";
import * as path from "path";
import { SafeAreaView } from "react-native-web";
import sendUsername from "./api/settings/api";

const fetcher = () =>
  fetch("/api/scores/list").then((response) => response.json());

let displayname;

export default function Home() {

  const [data, setData] = useState([]);
  const source={ uri: require('../public/backgroundDark.jpg') };
  const [username, onChangeText] = useState();

  const getUsername = async () => {
    try {
      const response = await fetch('http://localhost:30000/username');
      const json = await response.json();
      setData(json.data.value);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsername();
  }, []);

  sendUsername(username);

  return (
    <ImageBackground source={source.uri.default.src} style={styles.bgImg}>
    <SafeAreaView>
      <Text>
        {data}
      </Text>
      <TextInput
        onChangeText={onChangeText}
        value={username}
      />
    </SafeAreaView>
    </ImageBackground>
  );
};

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
  },
  bgImg: {
    height: "448px",
    width: "207px",
  },
});
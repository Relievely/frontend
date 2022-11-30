import React, { useState } from "react";
import useSWR from "swr";
import {
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
  const { data, mutate } = useSWR("", fetcher);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const source={ uri: require('../public/backgroundDark.jpg') };
  const initialUsername = "Guest"; //the username the user fills in in the guide
  const [username, onChangeText] = React.useState(initialUsername);

  displayname = sendUsername(username);

  return (
    <ImageBackground source={source.uri.default.src} style={styles.bgImg}>
    <SafeAreaView>
      <text>
        {/* {displayname} */}
      </text>
      <TextInput
        style={styles.input}
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
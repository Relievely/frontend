import { Button, ImageBackground, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import React, { useEffect, useState } from "react";
import AnimalPicker from "../components/AnimalPicker";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from 'react-native-elements';
import ThemedCard from "react-native-elements/dist/card/Card";


async function sendUsername(username: string) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:50000/username/${username}`, {
      method: "PUT"
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          resolve(true);
        }
      })
      .catch((err) => {
        console.error("Error: ", err);
        reject(err);
      });
  });
}

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const [usernameData, setUsernameData] = useState<string | null>(null);
  const [changeText, onChangeUsername] = React.useState(null);

  let usernameValue = "Guest";

  const getUsername = async () => {
    try {
      const response = await fetch("http://localhost:50000/username");
      const json = await response.json();
      console.log("Get Username Data: ", json.data.value);
      if (json.data.value === "undefined") {
        json.data.value = "Guest";
      }
      setUsernameData(json.data.value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsername();
  });

  return (
    <LinearGradient style={styles.container}
      // Button Linear Gradient
                    colors={["#0085A6", "#1C39AE", "#5106B5"]} locations={[0.2, 0.5, 0.8]} start={{x: .5, y: .2}} end={{x: 1, y: 1}}>
      <SafeAreaView>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>Change Username</Card.Title>
          <Card.Divider />
          <Text>
            {usernameData}
          </Text>
          <TextInput
            ref={(el: any) => {
              if (el) {
                usernameValue = el.value;
              }
            }}
            style={styles.input}
            placeholder="Enter username here&hellip;"
          />
          <Button
            title="Send Username"
            onPress={() => {
              sendUsername(usernameValue)
                .then((resp) => {
                  if (resp && resp === true) {
                    setUsernameData(usernameValue);
                  }
                });
            }
            } />
        </Card>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>Change Persona</Card.Title>
          <Card.Divider />
          <AnimalPicker />
        </Card>
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

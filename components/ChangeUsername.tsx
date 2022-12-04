import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text, TextInput, Button
} from "react-native";

import { Card } from "react-native-elements";

export class ChangeUsername extends Component {
  public usernameValue: string = "";

  public getUsername = async () => {
    try {
      const response = await fetch("http://localhost:50000/username");
      const json = await response.json();
      console.log("Get Username Data: ", json.data.value);
      if (json.data.value === "undefined") {
        json.data.value = "Guest";
      }
      this.setState({ usernameData: json.data.value });
    } catch (error) {
      console.error(error);
    }
  };

  public sendUsername = async (username: string) => {
    return new Promise((resolve, reject) => {
      if (username) {
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
      } else {
        console.warn("No username given");
      }
    });
  };

  constructor(props: any) {
    super(props);
    this.state = {
      usernameData: "Guest"
    };

    this.getUsername();
  }

  render() {
    return (
      <View>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>Change Username</Card.Title>
          <Card.Divider />
          <Text>
            {(this.state as { usernameData: string }).usernameData}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(changedName) => {
              this.setState({ usernameData: changedName });
            }}
            defaultValue="Guest"
            placeholder="Enter username here&hellip;"
          />
          <Button
            title="Send Username"
            onPress={() => {
              this.sendUsername((this.state as { usernameData: string }).usernameData)
                .then((resp) => {
                  if (resp && resp === true) {
                    console.log("Changed username successfully");
                    this.setState({ usernameData: this.usernameValue });
                  }
                });
            }
            } />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {}
});

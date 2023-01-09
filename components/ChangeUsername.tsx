import React, {Component} from "react";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";

export class ChangeUsername extends Component {
    public usernameValue: string = "";

    constructor(props: any) {
        super(props);
        this.state = {
            usernameData: "Guest"
        };

        this.getUsername();
    }

    public getUsername = async () => {
        try {
            const response = await fetch("http://localhost:50000/username");
            const json = await response.json();
            console.log("Get Username Data: ", json.data.value);
            if (json.data.value === "undefined") {
                json.data.value = "Guest";
            }
            this.setState({usernameData: json.data.value});
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

    render() {
        return (
            <View style={styles.view}>
                <View>
                    <Text style={styles.title}>Change your username</Text>
                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <Text style={styles.text}>
                        Your current username is <Text
                        style={{textDecorationLine: "underline"}}>{(this.state as { usernameData: string }).usernameData}</Text>,
                        you can change it to
                        whatever you want!
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(changedName) => {
                            this.setState({usernameData: changedName});
                        }}
                        placeholder="Your new username&hellip;"
                    />
                    <Pressable style={styles.button} onPress={() => {
                        this.sendUsername((this.state as { usernameData: string }).usernameData)
                            .then((resp) => {
                                if (resp && resp === true) {
                                    console.log("Changed username successfully");
                                    this.setState({usernameData: this.usernameValue});
                                }
                            });
                    }
                    }>
                        <Text>submit</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 15,
    },
    input: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        height: 20,
        padding: 10,
    },
    button: {
        backgroundColor: "#9ae8e1",
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
        shadowRadius: 1,
        width: "30%",
        paddingLeft: 5,
    },
    title: {
        fontSize: 15,
        paddingBottom: 5,
    },
    text: {
        marginVertical: 5,
    }
});

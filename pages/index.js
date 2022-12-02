import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    ImageBackground,
} from "react-native-web";
import {SafeAreaView} from "react-native-web";
import sendUsername from "./api/settings/api";

export default function Home() {

    const [usernameData, setUsernameData] = useState([]);
    const [changeText, onChangeUsername] = React.useState(null);

    const source = {uri: require('../public/backgroundDark.jpg')};

    let usernameValue = "Guest";

    const getUsername = async () => {
        try {
            const response = await fetch('http://localhost:50000/username');
            const json = await response.json();
            console.log("Get Username Data: ", json.data.value);
            if (json.data.value === "undefined") {
                json.data.value = "Guest";
            }
            setUsernameData(json.data.value);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUsername();
    });

    return (
        <ImageBackground source={source.uri.default.src} style={styles.bgImg}>
            <SafeAreaView>
                <Text>
                    {usernameData}
                </Text>
                <TextInput
                    ref={(el) => {
                        if (el) {
                            usernameValue = el.value;
                        }
                    }}
                    style={styles.input}
                    onChangeText={onChangeUsername}
                    value={changeText}
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
                            })
                    }
                    }/>
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
        backgroundColor: "#000000c0"
    },
    bgImg: {
        height: "448px",
        width: "207px",
    },
});
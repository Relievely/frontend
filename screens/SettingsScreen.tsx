import { StatusBar } from 'expo-status-bar';
import {Platform, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {LinearGradient} from "expo-linear-gradient";
import AnimalPicker from "../components/AnimalPicker";
import { ChangeUsername } from "../components/ChangeUsername";
import React from "react";

export default function SettingsScreen() {
    return (
        <LinearGradient style={styles.cardContainer}
                        colors={["#0085A6", "#1C39AE", "#5106B5"]} locations={[0.2, 0.5, 0.8]} start={{ x: .5, y: .2 }}
                        end={{ x: 1, y: 1 }}>
            <SafeAreaView>
                <ScrollView>
                    <ChangeUsername/>
                    <AnimalPicker/>
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
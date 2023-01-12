import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import React from 'react';

import {RootTabScreenProps} from '../types';
import {LinearGradient} from "expo-linear-gradient";
import {Graph} from "../components/Graph";
import Reflection from "../components/Reflection";
import MoodSelector from "../components/MoodSelector";

export default function JournalScreen({navigation}: RootTabScreenProps<'Journal'>) {
    return (
        <LinearGradient style={styles.container}
                        colors={["#50d1ff", "#9a3aff"]} locations={[0, 1]} start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}>
            <SafeAreaView style={{marginHorizontal: 100}}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.cardContainer}>
                        <MoodSelector style={cardStyles}/>
                    </View>
                    <View style={styles.cardContainer}>
                        <Reflection style={cardStyles}/>
                    </View>
                    <View style={styles.cardContainer}>
                        <Graph style={cardStyles}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const cardStyles = StyleSheet.create({
    container: {
        borderColor: "transparent",
        marginHorizontal: 0,
        marginTop: 0,
        paddingHorizontal: 0,
        paddingTop: 0,
        borderRadius: 25,
        width: "100%",
        backgroundColor: "transparent"
    },
    wrapper: {
        borderColor: "transparent",
        marginHorizontal: 0,
        marginTop: 0,
        paddingHorizontal: 0,
        paddingTop: 0,
        borderRadius: 25,
        width: "100%",
        backgroundColor: "#fff",
        paddingBottom: 25
    },
    title: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#AADDE9",
        color: "#3a3a3a",
        paddingVertical: 5,
        Weight: "bold"
    },
    text: {
        color: "#000"
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        fontFamily: "comfortaa",
    },
    scrollContainer: {
        marginHorizontal: "10%"
    },
    cardContainer: {
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: 'transparent',
        marginVertical: 10
    },
    title: {
        backgroundColor: "#aadde9",
        borderRadius: 5,
        fontWeight: "bold",
        padding: 6,
    },
    text: {
        fontStyle: "italic",
        marginLeft: 10,
        padding: 4,
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: "30%"
    },
});

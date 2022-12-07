import {StyleSheet, View, ScrollView} from "react-native";
import React from 'react';

import {RootTabScreenProps} from '../types';
import {LinearGradient} from "expo-linear-gradient";
import {Graph} from "../components/Graph";
import Reflection from "../components/Reflection";
import MoodSelector from "../components/MoodSelector";

export default function JournalScreen({navigation}: RootTabScreenProps<'Journal'>) {
    return (
        <LinearGradient style={styles.mainContainer}
                        colors={["#0085A6", "#1C39AE", "#5106B5"]} locations={[0.2, 0.5, 0.8]} start={{x: .5, y: .2}}
                        end={{x: 1, y: 1}}>
            <ScrollView>
                <View style={styles.container}>
                    <MoodSelector/>
                </View>
                <View style={styles.container}>
                    <Reflection style={cardStyles}/>
                </View>
                <View style={styles.container}>
                    <Graph/>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const cardStyles = StyleSheet.create({
    title: {
        backgroundColor: "#aadde9",
        height: 40,
        borderRadius: 5,
        fontWeight: "bold",
        padding: 6,
    },
    text: {
        fontStyle: "italic",
        marginLeft: 10,
        padding: 4,
    }
})

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 15,
        backgroundColor: '#ffff',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10
    },
    title: {
        backgroundColor: "#aadde9",
        borderRadius: 5,
        fontWeight: "bold",
        padding: 6,
    },
    thumbs: {
        marginLeft: 14,
        padding: 1,
    },
    text: {
        fontStyle: "italic",
        marginLeft: 10,
        padding: 4,
    },
    input: {
        marginTop: 10,
        marginLeft: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
    },
});

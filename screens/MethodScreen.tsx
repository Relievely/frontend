import {StyleSheet} from 'react-native';


import {LinearGradient} from "expo-linear-gradient";
import React from "react";

export default function MethodScreen() {
    return (
        <LinearGradient style={styles.cardContainer}
                        colors={["#0085A6", "#1C39AE", "#5106B5"]} locations={[0.2, 0.5, 0.8]} start={{x: .5, y: .2}}
                        end={{x: 1, y: 1}}>

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
});
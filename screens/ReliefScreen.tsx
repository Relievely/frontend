import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {LinearGradient} from "expo-linear-gradient";
import React from "react";

export default function ReliefScreen({navigation}: RootTabScreenProps<'Relief'>) {
    return (
        <LinearGradient style={styles.cardContainer}
                        colors={["#0085A6", "#1C39AE", "#5106B5"]} locations={[0.2, 0.5, 0.8]} start={{x: .5, y: .2}}
                        end={{x: 1, y: 1}}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.view}>
                        <View style={styles.box}>
                            <Text style={styles.text}>🧘‍♀️</Text>
                            <Text style={styles.text}>meditate</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>❔</Text>
                            <Text style={styles.text}>questions</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>🚶‍♀️</Text>
                            <Text style={styles.text}>walk</Text>
                        </View>
                    </View>

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
    text: {
        color: "black",
        backgroundColor: "white",
        fontSize: 42,
        lineHeight: 84,
        textAlign: "center",
        fontFamily: "comfortaa",
    },
    view: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 15,
    },
    box: {
        borderColor: "black",
        borderWidth: 1,
        margin: 8,
        borderRadius: 10,
    }
});

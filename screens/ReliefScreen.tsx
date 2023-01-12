import {SafeAreaView, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {LinearGradient} from "expo-linear-gradient";
import React from "react";

export default function ReliefScreen({navigation}: RootTabScreenProps<'Relief'>) {
    return (
        <LinearGradient style={styles.container}
                        colors={["#50d1ff", "#9a3aff"]} locations={[0, 1]} start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <Text style={styles.title1}>
                            Feeling stressed? Try one of these activities:
                        </Text>
                        <View style={styles.view}>
                            <View style={styles.box}>
                                <TouchableHighlight>
                                    <View style={styles.button}> <Text style={styles.text}>🧘‍♀️</Text>
                                        <Text style={styles.text}>meditation</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.box}>
                                <TouchableHighlight>
                                    <View style={styles.button}>
                                        <Text style={styles.text}>❔</Text>
                                        <Text style={styles.text}>questions</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.box}>
                                <TouchableHighlight>
                                    <View style={styles.button}>
                                        <Text style={styles.text}>🚶‍♀️</Text>
                                        <Text style={styles.text}>walking</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
    },
    cardContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
        textAlign: "center",
        marginBottom: 15,
        backgroundColor: '#ffff',
        borderRadius: 10,
        width: 365,
        height: 200
    },
    text: {
        color: "black",
        backgroundColor: "white",
        fontSize: 20,
        lineHeight: 64,
        textAlign: "center",
    },
    view: {
        borderRadius: 25,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        fontFamily: 'Arial',
    },

    box: {
        borderColor: "grey",
        borderWidth: 1, padding: 8,
        margin: 8, shadowRadius: 3,
        backgroundColor: "white",
    },
    button: {
        borderRadius: 15,
    },
    title1: {
        backgroundColor: "#aadde9",
        height: 60,
        borderRadius: 5,
        fontSize: 20,
        padding: 6,
        color: "black",
    },
});

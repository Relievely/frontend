import React, {Component} from "react";
import {Button, Card} from "react-native-elements";
import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import EmojiText from "./EmojiText";

export default class MoodSelector extends Component {

    public Mood = [
        {
            src: '',
            string: 'Very stressed'
        },
        {
            string: 'Stressed'
        },
        {
            string: 'Okay'
        },
        {
            string: 'Calm'
        },
        {
            string: 'Happy'
        },
    ]

    render() {
        return (
            <Card>
                <Card.Title style={styles.title}>
                    How are you today?
                </Card.Title>
                <Card.Divider/>
                <View style={styles.rowList}>
                    <MoodButton value={"😫"}/>
                    <MoodButton value={"😟"}/>
                    <MoodButton value={"😐"}/>
                    <MoodButton value={"🙂"}/>
                    <MoodButton value={"😊"}/>
                </View>
                <View>
                    <TextInput style={styles.input}
                               placeholder="Note"
                    ></TextInput>
                </View>
            </Card>
        )
    }
}

function MoodButton(props: {
    value: string
}) {
    return (
        <Button
            title={<EmojiText value={props.value}/>}
            containerStyle={{
                marginHorizontal: 10,
                marginVertical: 10,
            }}
        />
    )
}

const styles = StyleSheet.create({
    rowList: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
        flexWrap: "nowrap",
        overflow: "visible",
        textAlign: "center"
    },
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
    },
    input: {
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        borderWidth: 1,
        padding: 10,
        width: 250,
        borderRadius: 7,
    },
});

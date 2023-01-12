import React, {Component} from "react";
import {Button, Card, Input} from "react-native-elements";
import {StyleSheet, View} from "react-native";
import EmojiText from "./EmojiText";

export default class MoodSelector extends Component<{ style: any }> {

    updateIndex(selectedIndex: number) {
        this.setState({selectedIndex})
    }

    render() {
        return (
            <Card containerStyle={this.props.style.container}
                  wrapperStyle={this.props.style.wrapper}>
                <Card.Title style={this.props.style.title}>
                    How are you today?
                </Card.Title>
                <View style={styles.rowList}>
                    <MoodButton value={"😫"}/>
                    <MoodButton value={"😟"}/>
                    <MoodButton value={"😐"}/>
                    <MoodButton value={"🙂"}/>
                    <MoodButton value={"😊"}/>
                </View>
                <View style={styles.inputRow}>
                    <Input autoCompleteType={"true"} style={this.props.style.input}
                           placeholder="Note"
                    ></Input>
                    <Button title={"Submit"} type={"outline"}/>
                </View>
            </Card>
        )
    }
}

function MoodButton(props: {
                        value: string
                    }
) {
    return (
        <Button
            onPress={() => console.log("Button clicked!")}
            title={<EmojiText value={props.value}/>}
            type={"outline"}
            raised={true}
            containerStyle={{
                marginHorizontal: 10,
                marginVertical: 10
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
        textAlign: "center",
        justifyContent: "space-evenly"
    },
    inputRow: {
        flex: 1,
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "space-evenly",
        marginHorizontal: "20%"
    },
    text: {
        marginLeft: 10,
        padding: 4,
    }
});

import React, {Component} from "react";
import {Button, Card} from "react-native-elements";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ActivityItem} from "../constants/Interfaces";
import {ActivityService, JournalService} from "../constants/Services";

export default class Reflection extends Component<{ style: any }, { yesterdayMood: string, yesterdayActivity: string }> {
    constructor(props: { style: any }) {
        super(props);
        this.state = {
            yesterdayMood: "😐",
            yesterdayActivity: "🪁"
        } as { yesterdayMood: string, yesterdayActivity: string };

        this.getActivityFromYesterday();
    }

    public getMoodFromYesterday = async () => {
        try {
            const response = await fetch(`${JournalService}/progress`);
            const json = await response.json();
            console.log("Get Username Data: ", json.data);
            if (json.data.value === "undefined") {
                json.data.value = "Guest";
            }
            this.setState({yesterdayMood: json.data.value});
        } catch (error) {
            console.error(error);
        }
    };

    public getActivityFromYesterday = async () => {
        fetch(`${ActivityService}/activity/latest`)
            .then(async (response) => {
                const json = await response.json();
                console.log("Get Latest Activity Data: ", json.data);
                if (!json.data && !json.data.value) {
                    console.error("Response is undefined");
                }
                this.setState({yesterdayActivity: (json.data.value as ActivityItem).name});
            })
            .catch((error) => {
                console.error(error);
            })
    };

    render() {
        return (
            <Card containerStyle={this.props.style.container}
                  wrapperStyle={this.props.style.wrapper}>
                <Card.Title style={this.props.style.title}>
                    Let's reflect
                </Card.Title>
                <Text style={this.props.style.text}>Yesterday you felt: {this.state.yesterdayMood}</Text>
                <Text style={this.props.style.text}>Activity you did: {this.state.yesterdayActivity}</Text>
                <Text style={this.props.style.text}>Did it work?</Text>
                <Card.Divider/>
                <View style={styles.thumbs}>
                    <Button onPress={() => {
                    }}
                            title={"👍"}
                            accessibilityLabel={"Thumbs Up Button"}
                            type={"outline"}
                            raised={true}
                    />
                    <Button onPress={() => {
                    }}
                            title={"👎"}
                            accessibilityLabel={"Thumbs Up Button"}
                            type={"outline"}
                            raised={true}
                    />
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: "#aadde9",
        height: 40,
        borderRadius: 5,
        fontWeight: "bold",
        padding: 6,
    },
    thumbs: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 14,
        padding: 1,
        textAlign: "center",
        justifyContent: "space-around"
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

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Card } from "react-native-elements";

export default class ActivityBox extends Component {

    public activityArray = []

    public getActivity = async () => {
        try {
            const response = await fetch("http://localhost:50005/activity");
            const json = await response.json();
            for (let i = 0; i < json.data.length; i++) {
                await this.addActivity(json.data.value[i].name, json.data.value[i].category, json.data.value[i].description);
            }

        } catch (error) {
            console.error(error);
        }
    };

    constructor(props: any) {
        super(props);
        this.getActivity();
    }

    addActivity = async (name: string, category: string, description: string) => {
    this.activityArray.push(`<Text>${name}, ${category}, ${description}</Text>`)
    }

    render() {
        console.log(this.activityArray)
        console.log(JSON.stringify(this.activityArray))
        return ( this.activityArray.join() );
    }
}

const styles = StyleSheet.create({
    box: {
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 100,
        width: '100%',
        height: 50,
        fontFamily: 'noto-color-emoji',
        fontSize: 18,
        marginHorizontal: 15,
    }

});
import React, {Component} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Card} from "react-native-elements";
import {PersonaService, SettingsService} from "../constants/Services";

export default class AnimalPicker extends Component {

    public personaValue: string = "dog";

    constructor(props: any) {
        super(props);
        this.state = {
            selectedAnimal: 'dog',
        }
    }

    public getPersona = async () => {
        try {
            const response = await fetch( `${PersonaService}/persona`);
            const json = await response.json();
            console.log("Get Persona Data: ", json.data.value);
            if (json.data.value === "undefined") {
                json.data.value = "dog";
            }
            this.setState({personaData: json.data.value});
        } catch (error) {
            console.error(error);
        }
    };

    public sendPersona = async (persona: string) => {
        console.log(persona)
        return new Promise((resolve, reject) => {
            if (persona) {
                fetch(`${SettingsService}/persona/${persona}`, {
                    method: "PUT"
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.success) {
                            resolve(true);
                        }
                    })
                    .catch((err) => {
                        console.error("Error: ", err);
                        reject(err);
                    });
            } else {
                console.warn("No persona given");
            }
        });
    };

    render() {
        return (
            <Card>
                <Card.Title>Change Persona</Card.Title>
                <Card.Divider/>
                <View>
                    <Text style={styles.textStyle}>Choose an Animal:</Text>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={(this.state as { selectedAnimal: string }).selectedAnimal}
                        onValueChange={(itemValue, itemIndex) => this.setState({selectedAnimal: itemValue}, () => this.sendPersona(itemValue))}
                    >
                        <Picker.Item label="🐼 | Panda" value="panda"/>
                        <Picker.Item label="🐰 | Rabbit" value="rabbit"/>
                        <Picker.Item label="🐋 | Whale" value="whale"/>
                        <Picker.Item label="🐱 | Cat" value="cat"/>
                        <Picker.Item label="🐍 | Snake" value="snake"/>
                        <Picker.Item label="🦥 | Sloth" value="sloth"/>
                        <Picker.Item label="🐧 | Penguin" value="penguin"/>
                        <Picker.Item label="🐶 | Dog" value="dog"/>
                    </Picker>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    pickerStyle: {
        width: '100%',
        height: 50,
        fontFamily: 'noto-color-emoji',
        fontSize: 18,
    },
    textStyle: {
        fontFamily: "comfortaa",
        fontWeight: 'bold',
        fontSize: 18,
    }
});
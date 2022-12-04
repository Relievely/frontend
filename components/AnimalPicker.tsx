import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Card } from "react-native-elements";

export default class AnimalPicker extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedAnimal: 'dog',
    }
  }

  render() {
    return (
      <Card>
        <Card.Title>Change Persona</Card.Title>
        <Card.Divider />
        <View>
          <Text style={styles.textStyle}>Choose an Animal:</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={(this.state as {selectedAnimal: string}).selectedAnimal}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedAnimal: itemValue})}
          >
            <Picker.Item label="🐶 Dog" value="dog" />
            <Picker.Item label="🐱 Cat" value="cat" />
            <Picker.Item label="🐭 Mouse" value="mouse" />
            <Picker.Item label="🐹 Hamster" value="hamster" />
            <Picker.Item label="🦊 Fox" value="fox" />
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
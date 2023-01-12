import React, {Component} from "react";
import {Button, Card, CheckBox, Chip, Switch} from "react-native-elements";
import {StyleSheet, Text, TextInput, View} from "react-native";
import CalendarPicker from 'react-native-calendar-picker';
import {Moment} from "moment/moment";
import {Picker} from "@react-native-picker/picker";
import {TimePicker, ValueMap} from "react-native-simple-time-picker";

export default class SetGoal extends Component<{ style: any }, {
    selectedGoalStartDate: Moment | null,
    selectedReminderStartDate: Moment | null,
    timePicker: ValueMap,
    reminderSwitch: boolean,
    selectedStep: any | null
}
> {

    constructor(props: any) {
        super(props);
        this.state = {
            selectedGoalStartDate: null,
            selectedReminderStartDate: null,
            timePicker: {
                hours: 1,
                minutes: 0,
                seconds: 0,
            },
            reminderSwitch: false,
            selectedStep: ""
        };
        this.onGoalDateChange = this.onGoalDateChange.bind(this);
        this.onReminderDateChange = this.onReminderDateChange.bind(this);
    }

    onGoalDateChange(date: Moment) {
        this.setState({
            selectedGoalStartDate: date,
        });
    }

    onReminderDateChange(date: Moment) {
        this.setState({
            selectedReminderStartDate: date,
        });
    }

    // noinspection JSUnusedGlobalSymbols
    toggleSwitch = (value: boolean) => {
        this.setState({
            reminderSwitch: value
        });
    };

    handleStepPickerChange = (value: any) => {
        this.setState({
            selectedStep: value
        })
    }

    handleTimePickerChange = (value: ValueMap) => {
        this.setState({
            timePicker: value
        });
    };

    render() {
        return (
            <Card containerStyle={this.props.style.container}
                  wrapperStyle={this.props.style.wrapper}>
                <Card.Title style={this.props.style.title}>
                    Set New Goal
                </Card.Title>
                <View style={styles.rowColumn}>
                    <Text>Give your Goal a name:</Text>
                    <TextInput placeholder="Enter new Goal"></TextInput>
                    <Text>What are the steps to achieve this goal?</Text>
                    <CheckBox>Step 1: First I need to do this.</CheckBox>
                    <CheckBox>Step 2: Then I need to to this.</CheckBox>
                    <Chip
                        title="➕ Add Step"
                        disabled
                    />
                    <Text>What is the deadline of your goal?</Text>
                    <CalendarPicker
                        onDateChange={this.onGoalDateChange}
                    />
                    <View style={{marginTop: 25, ...styles.rowColumn}}>
                        <Switch
                            value={this.state.reminderSwitch}
                            onValueChange={(value: boolean) => this.toggleSwitch(value)}
                        />
                        <Text>Do you want to be reminded?</Text>
                    </View>
                    {this.state.reminderSwitch && <View style={{...styles.rowColumn}}>
                        <Picker selectedValue={this.state.selectedStep}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.handleStepPickerChange(itemValue)
                                }>
                            <Picker.Item label="Step 1" value="1"/>
                            <Picker.Item label="Step 2" value="2"/>
                        </Picker>
                        <CalendarPicker
                            onDateChange={this.onReminderDateChange}
                        />
                        <TimePicker value={this.state.timePicker} onChange={this.handleTimePickerChange}/>
                    </View>}
                    <View style={{marginTop: 50, ...styles.rowList}}>
                        <Button title="Reset"/>
                        <Button title="Submit"/>
                    </View>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    rowColumn: {
        flex: 1,
        padding: 25,
        margin: 25,
        flexDirection: "column",
        overflow: "visible",
        textAlign: "center",
        justifyContent: "space-evenly"
    },
    rowList: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
        overflow: "visible",
        textAlign: "center",
        justifyContent: "space-evenly"
    },
});


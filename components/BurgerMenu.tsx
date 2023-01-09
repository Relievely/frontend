import React, {Component} from "react";
import {Animated, StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";

class BurgerMenu extends Component {

    state = {
        menuOpen: false
    };
    // animate hamburger icon
    animatedValue = new Animated.Value(0);

    // toggle menu on/off
    toggleMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen});
    };

    animate = () => {
        this.animatedValue.setValue(0);
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true
        }).start();
    };

    render() {
        const {menuOpen} = this.state;

        // rotate hamburger icon
        const rotate = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "90deg"]
        });

        return (
            <View style={styles.cardContainer}>
                {/* hamburger icon */}
                <Button onPress={() => this.toggleMenu()}>
                    <Animated.View style={[styles.button, {transform: [{rotate}]}]}>
                        <Text style={styles.buttonText}>☰</Text>
                    </Animated.View>
                </Button>

                {/* menu content */}
                {menuOpen && (
                    <View style={styles.menu}>
                        <Text>Menu</Text>
                        <Text>Settings</Text>
                        <Text>Option 2</Text>
                        <Text>Option 3</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#000",
        padding: 10,
        marginTop: 20,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: "#fff"
    },
    menu: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5
    }
});

export default BurgerMenu;
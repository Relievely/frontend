import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import { RootTabScreenProps } from "../types";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

// const data = [
//   {
//     id: '1',
//     title: 'Sit comfortablyin a place you can relax. You don’t need to sit cross-legged, as long as you are comfortable and good to sit in this position for about 5-10 minutes.',
//   },
//   {
//     id: '2',
//     title: 'Set a timer. For beginners, 5 to 10 minutes is long enough.',
//   },
//   {
//     id: '3',
//     title: ' Breathe in and out, try to focus on the sensation of air leaving and entering your body.',
//   },
//   {
//     id: '4',
//     title: 'Inevitably, your mind will start to wonder. Don’t worry about what occupies your mind, and don’t brush away thoughts that appear. Now is the moment you can take the time to think about things.',
//   },
//   {
//     id: '5',
//     title: 'When you feel you have dwelled on a subject long enough, return to focussing on your breath.It’s perfectly okay to get distracted again, be sure to give each occurring thought the attention it deserves before returning back to breathing.',
//   },
//   {
//     id: '6',
//     title: 'When your timer is over, try to notice your surroundings and think about how you are feeling.',
//   },
// ];

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {

  return (
      <LinearGradient style={styles.container}
                      colors={["#50d1ff", "#9a3aff"]} locations={[0, 1]} start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.cardContainer}>
            <Text style={styles.title1}>Meditation</Text>
            <Text style={styles.emoji}>🧘‍</Text>
            <Text style={styles.text}>Meditation is a great method to relieve stress because you only needthe thing you always carry with you: Yourself.This means you can do it anywhere. However, it’s easier for beginners to do it in a space that you have for yourself where you don’t get distracted easily.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "comfortaa",
  },
  emoji: {
    fontSize: 50,
  },
  title1: {
    backgroundColor: "#aadde9",
    height: 40,
    borderRadius: 5,
    fontFamily: "comfortaa",
    fontSize: 20,
    padding: 6,
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
  paragraph: {},
  button: {},
  image: {
    flex: 1,
    justifyContent: "center"

  },
  input: {
    color: "black",
    backgroundColor: "white",
    fontFamily: "Arial"
  },
  text: {
    fontSize: 12,
    fontFamily: "comfortaa",
  },
  card: {
    borderRadius: 6,
  },
  cardContainer: {
    textAlign: "center",
    marginBottom: 15,
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: 365,
    height: 500,
  },

});

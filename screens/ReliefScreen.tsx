import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import ActivityBox from "../components/ActivityBox";

export default function ReliefScreen({ navigation }: RootTabScreenProps<'Relief'>) {
  return (
      <LinearGradient style={styles.cardContainer}
                      colors={["#0085A6", "#1C39AE", "#5106B5"]} locations={[0.2, 0.5, 0.8]} start={{ x: .5, y: .2 }}
                      end={{ x: 1, y: 1 }}>
        <SafeAreaView>
          <ScrollView>
            <ActivityBox/>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "comfortaa",
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
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "comfortaa",
    backgroundColor: "#000000c0"
  },
  card: {
    borderRadius: 6,
  }

});

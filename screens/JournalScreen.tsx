import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";

import { RootTabScreenProps } from '../types';
import { LinearGradient } from "expo-linear-gradient";

const Mood = [
  {
    src: '',
    string:'Very stressed'
  },
  {
    string:'Stressed'
  },
  {
    string:'Okay'
  },
  {
    string:'Calm'
  },
  {
    string:'Happy'
  },
]

const Item = ({ string }) => (
  <View>
    <Text>{string}</Text>
  </View>
);

export default function JournalScreen({ navigation }: RootTabScreenProps<'Journal'>) {
  const renderItem = ({ item }) => (
    <Item string={item.string} />
  );

  return (

      <LinearGradient style={styles.mainContainer}
        // Button Linear Gradient
                      colors={["#0085A6", "#1C39AE", "#5106B5"]} locations={[0.2, 0.5, 0.8]} start={{ x: .5, y: .2 }}
                      end={{ x: 1, y: 1 }}>
        <View style = {styles.container}>
          <Text style={styles.text}>How are you today?</Text>
          <SafeAreaView>
            <FlatList
              contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
              horizontal={true}
              data={Mood}
              renderItem={renderItem}
              keyExtractor={item => item.string}
              pagingEnabled={false}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      height: "100%",
                      width: 17,
                    }} />
                );
              }}
            />
          </SafeAreaView>
        </View>
        <View style = {styles.container1}>
          <Text style={styles.text}>Let's reflect</Text>
        </View>
        <View style = {styles.container2}>
          <Text style={styles.text}>Your progress</Text>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    marginBottom: 15,
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: 365,
    height: 150,
  },
  container1: {
    marginBottom: 15,
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: 365,
    height: 150,
  },
  container2: {
    marginBottom: 15,
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: 365,
    height: 150,
  },
  text: {
    backgroundColor: "#d2bbf0",
    height: 40,
    borderRadius: 5,
    fontWeight: "bold",
    padding: 6,
  }
});

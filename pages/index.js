import React from "react";
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    FlatList,
    StyleSheet,
    ImageBackground,
    Pressable,
} from "react-native-web";

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


const Emoji = () => {
    const source={ uri: require('../public/assets/backgroundLight.jpg') };
    const renderItem = ({ item }) => (
        <Item string={item.string} />
    );

    return (
        <View>
            <ImageBackground source={source.uri.default.src} style={styles.bgImg}>
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
            <TextInput style={styles.input}
                       placeholder="Note"
            ></TextInput>
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
      margin: 5,
      backgroundColor: '#ffff',
      borderRadius: 10,
      width: 365,
      height: 150,
  },
    bgImg: {
        height: "667px",
        width: "375px",
    },
    text: {
        backgroundColor: '#8d4cfb',
        height: 35,
        borderRadius: 5,
        fontWeight: "bold",
        padding: 5,
    },
    input: {
        height: 40,
        marginTop: 35,
        marginLeft: 10,
        borderWidth: 1,
        padding: 10,
        width: 250,
        borderRadius: 7,
    },
});

export default Emoji;

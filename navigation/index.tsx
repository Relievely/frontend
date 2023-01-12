/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import {ColorSchemeName, Pressable, View} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";
import ReliefScreen from "../screens/ReliefScreen";
import GoalsScreen from "../screens/GoalsScreen";
import JournalScreen from "../screens/JournalScreen";
import EmojiText from "../components/EmojiText";
import SettingsScreen from "../screens/SettingsScreen";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: "Oops!"}}/>
            <Stack.Group screenOptions={{presentation: "modal"}}>
                <Stack.Screen name="Modal" component={ModalScreen}/>
                <Stack.Screen name={"Settings"} component={SettingsScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors["light"].tint,
                tabBarActiveBackgroundColor: "#fff",
                tabBarInactiveBackgroundColor: "#fff",
                tabBarInactiveTintColor: Colors["dark"].tintInactive,
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={({navigation}: RootTabScreenProps<"Home">) => ({
                    title: "Home",
                    tabBarIcon: () => <TabBarEmojiIcon value="🏠"/>,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate("Settings")}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1
                            })}>
                            <FontAwesome
                                name="cog"
                                size={25}
                                color={"white"}
                                style={{marginRight: 15}}
                            />
                        </Pressable>
                    )
                })}
            />
            <BottomTab.Screen
                name="Relief"
                component={ReliefScreen}
                options={{
                    title: "Relief",
                    tabBarIcon: () => <TabBarEmojiIcon value="🧘"/>
                }}
            />
            <BottomTab.Screen
                name="Goals"
                component={GoalsScreen}
                options={{
                    title: "Goals",
                    tabBarIcon: () => <TabBarEmojiIcon value="🎯"/>
                }}
            />
            <BottomTab.Screen
                name="Journal"
                component={JournalScreen}
                options={{
                    title: "Journal",
                    tabBarIcon: () => <TabBarEmojiIcon value="📖"/>
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}

function TabBarEmojiIcon(props: {
    value: string
}) {
    return <View style={
        {
            marginBottom: -3,
            borderStyle: "solid",
            borderColor: "#000",
            borderRadius: 500,
            borderWidth: 1,
            padding: 8,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
        }
    }><EmojiText value={props.value}/></View>;
}


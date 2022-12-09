import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text, Dimensions,
} from "react-native";
import {
    LineChart,
} from "react-native-chart-kit";

export class Graph extends Component {

    public getProgress = async () => {
        try {
            const response = await fetch("http://localhost:50003/progress");
            const json = await response.json();
            // console.log("Get Graph Data: ", json.data);
            if (json.data === "undefined") {
                json.data = "Guest";
            }
            this.setState({ graphData: json.data });
        } catch (error) {
            console.error(error);
        }
    };

    // public sendUsername = async (username: string) => {
    //     return new Promise((resolve, reject) => {
    //         if (username) {
    //             fetch(`http://localhost:50000/username/${username}`, {
    //                 method: "PUT"
    //             })
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     if (data.success) {
    //                         resolve(true);
    //                     }
    //                 })
    //                 .catch((err) => {
    //                     console.error("Error: ", err);
    //                     reject(err);
    //                 });
    //         } else {
    //             console.warn("No username given");
    //         }
    //     });
    // };

    constructor(props: any) {
        super(props);
        this.state = {
            graphData: {}
        };

        this.getProgress();
    }

    public setData() {
        if(this.state.graphData.value) {
            console.log("Graph Data: ", this.state.graphData.value[0]);
            this.state.graphData.forEach((element: any) => {
                console.log("Element: ", element);
            });
        }
        let moodValues = {
            "Very Bad": 1,
            "Bad": 2,
            "Medium": 3,
            "Good": 4,
            "Very Good": 5,
        }
        
        let moodData;

        moodData = {labels: [

            "January", "February", "March", "April", "May", "June",

            ],
            datasets: [
                {
                    data: [1, 2, 3, 2 , 2, 1
                    ]
                }
            ]};

        return moodData;
    }

    render() {
        return (
            <View>
                <Text>Your progress</Text>
                <LineChart
                    data={this.setData()}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "2", //dot size
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{ //this influences the box the graph is in
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 15,
    },
    input: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        height: 20,
        padding: 10,
    },
    button: {
        backgroundColor: "#9ae8e1",
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
        shadowRadius: 1,
        width: "30%",
        paddingLeft: 5,
    },
    title: {
        fontSize: 15,
        paddingBottom: 5,
    },
    text: {
        marginVertical: 5,
    }
});

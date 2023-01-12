import React, {Component} from "react";
import {Dimensions,} from "react-native";
import {LineChart,} from "react-native-chart-kit";
import {MoodString, MoodType, ProgressItem, ProgressItemResponse} from "../constants/Interfaces";
import {Card} from "react-native-elements";

export class Graph extends Component<{ style: any }> {

    constructor(props: any) {
        super(props);
        this.state = {
            graphData: {}
        };

        this.getProgress();
    }

    public getProgress = async () => {
        try {
            const response = await fetch("http://localhost:50003/progress");
            const json = await response.json();
            // console.log("Get Graph Data: ", json.data);
            if (json.data === "undefined") {
                json.data = "Guest";
            }
            this.setState({graphData: json.data});
        } catch (error) {
            console.error(error);
        }
    };

    public setData() {
        const data = (this.state as { graphData: { value: any[] } }).graphData;

        const progressList: ProgressItem[] = [];

        let moodData;

        if (data && data.value) {
            console.log("Graph Data: ", data.value);
            data.value.forEach((element: ProgressItemResponse) => {
                progressList.push({
                    id: element.id,
                    creationDate: new Date(element.creationDate),
                    mood: this.moodStringToNumber(element.mood)
                })
                console.log("Element: ", element);
            });
            console.log("progressList: ", progressList);

            moodData = {
                labels: progressList.map<string>((v: ProgressItem) => `${v.creationDate.getUTCDate().toString()}-${v.creationDate.getUTCMonth().toString()}`),
                datasets: [
                    {
                        data: progressList.map<number>((v: ProgressItem) => v.mood)
                    }
                ]
            };
        } else {
            moodData = {
                labels: [],
                datasets: [
                    {
                        data: []
                    }
                ]
            };
        }

        console.log("moodData: ", moodData);
        return moodData;
    }

    render() {
        return (
            <Card containerStyle={this.props.style.container}
                  wrapperStyle={this.props.style.wrapper}>
                <Card.Title style={this.props.style.title}>
                    Your mood levels
                </Card.Title>
                <LineChart
                    data={{ //works with setData(), but i hardcoded it to test without the backend running
                        "labels": [
                            "01/01",
                            "01/02",
                            "01/03",
                            "01/04"
                        ],
                        "datasets": [
                            {
                                "data": [
                                    2,
                                    3,
                                    4,
                                    2
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={200}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#823dcc",
                        backgroundGradientFrom: "#823dcc",
                        backgroundGradientTo: "#823dcc",
                        decimalPlaces: 0, // optional, defaults to 2dp
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
                        marginVertical: 4,
                        borderRadius: 16
                    }}
                />
            </Card>
        );
    }

    private moodStringToNumber(mood: MoodString): MoodType {
        let typedMoodString: keyof typeof MoodType = mood;
        return MoodType[typedMoodString];
    }
}

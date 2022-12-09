import {Component} from "react";
import {Text} from "./Themed";
import * as React from "react";

export default class EmojiText extends Component<{value: string}> {
    render() {
        return (
            <Text style={{fontFamily: "noto-color-emoji"}}>{(this.props as {value: string}).value}</Text>
        )
    }
}
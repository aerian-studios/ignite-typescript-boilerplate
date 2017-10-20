import * as React from "react";
import { Text, TextStyle, TouchableOpacity } from "react-native";
import ExamplesRegistry from "../Services/ExamplesRegistry";
import styles from "./Styles/FullButtonStyles";

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Full Button", () => (
  <FullButton
    text="Hey there"
    // tslint:disable-next-line:jsx-no-lambda
    onPress={() => window.alert("Full Button Pressed!")}
  />),
);

interface Props {
    onPress?: () => void;
    styles?: TextStyle;
    text?: string;
}

export default class FullButton extends React.Component<Props, {}> {

  public render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

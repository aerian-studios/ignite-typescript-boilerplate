import * as React from "react";
import { Text, View } from "react-native";
import AlertMessageStyles from "./Styles/AlertMessageStyles";

interface Props {
  icon?: string;
  show?: boolean;
  style?: any;
  title?: string;
}

export default class AlertMessage extends React.Component<Props, {}> {
  public static defaultProps = { show: true };

  public render() {
    const messageComponent = null;
    if (this.props.show) {
      const { title } = this.props;
      return (
        <View
          style={[AlertMessageStyles.container, this.props.style]}
        >
          <View style={AlertMessageStyles.contentContainer}>
            <Text allowFontScaling={false} style={AlertMessageStyles.message}>{title && title.toUpperCase()}</Text>
          </View>
        </View>
      );
    }

    return messageComponent;
  }
}

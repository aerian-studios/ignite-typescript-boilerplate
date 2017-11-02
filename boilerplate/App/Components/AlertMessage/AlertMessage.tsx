import * as React from "react";
import { Text, View, ViewStyle } from "react-native";
import styles from "./AlertMessageStyles";

interface Props {
  icon?: string;
  show?: boolean;
  style?: ViewStyle;
  title?: string;
}

const AlertMessage: React.SFC<Props> = ({ icon, show = true, style, title }: Props) => show ? (
  <View style={[styles.container, style]}>
    <View style={styles.contentContainer}>
      <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
    </View>
  </View>
) : null;

export default AlertMessage;

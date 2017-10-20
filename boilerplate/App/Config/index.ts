import { Text } from "react-native";
import AppConfig from "./AppConfig";
import DebugConfig from "./DebugConfig";

// Allow/disallow font-scaling in app
if (!Text.defaultProps) {
  Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling;

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = !DebugConfig.yellowBox;
}

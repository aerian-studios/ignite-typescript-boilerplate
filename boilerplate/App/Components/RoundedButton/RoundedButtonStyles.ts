import { StyleSheet } from "react-native";
import Colors from "../../Themes/Colors";
import Fonts from "../../Themes/Fonts";
import Metrics from "../../Themes/Metrics";

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.snow,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
  },
});

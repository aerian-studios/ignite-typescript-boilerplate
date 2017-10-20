import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import AlertMessage from "./AlertMessage";

storiesOf("AlertMessage")
  .add("Default", () => (
    <AlertMessage
      title="ALERT ALERT"
    />
  ))
  .add("Hidden", () => (
    <AlertMessage
      title="ALERT ALERT"
      show={false}
    />
  ))
  .add("Custom Style", () => (
    <AlertMessage
      title="ALERT ALERT"
      style={{ backgroundColor: "red" }}
    />
  ));

import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import FullButton from "./FullButton";

storiesOf("FullButton")
  .add("Default", () => (
    <FullButton
      text="A simple button"
    />
  ))
  .add("Custom Style", () => (
    <FullButton
      text="Style Me Up!"
      style={{ backgroundColor: "blue" }}
    />
  ));

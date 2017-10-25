import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import RoundedButton from "./RoundedButton";

storiesOf("RoundedButton", module)
  .add("Default", () => (
    <RoundedButton
      text="A simple rounded button"
    />
  ))
  .add("Text as children", () => (
    <RoundedButton>
        Hello from the children!
    </RoundedButton>
  ));

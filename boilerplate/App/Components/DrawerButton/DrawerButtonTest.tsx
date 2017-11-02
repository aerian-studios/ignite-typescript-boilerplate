/// <reference types="@types/jest" />
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import * as renderer from "react-test-renderer";
import DrawerButton from "./DrawerButton";

test("AlertMessage component renders correctly", () => {
  const tree = renderer.create(<DrawerButton onPress={() => {}} text="hi" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("onPress", () => {
  let i = 0;
  const onPress = () => i++;
  const wrapperPress = shallow(<DrawerButton onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});

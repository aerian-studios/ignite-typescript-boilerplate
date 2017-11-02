/// <reference types="@types/jest" />
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import * as renderer from "react-test-renderer";
import RoundedButton from "./RoundedButton";

test("RoundedButton component renders correctly", () => {
  const tree = renderer.create(<RoundedButton onPress={() => {}} text="howdy" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("RoundedButton component with children renders correctly", () => {
  const tree = renderer.create(<RoundedButton onPress={() => {}}>Howdy</RoundedButton>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("onPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++;
  const wrapperPress = shallow(<RoundedButton onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});

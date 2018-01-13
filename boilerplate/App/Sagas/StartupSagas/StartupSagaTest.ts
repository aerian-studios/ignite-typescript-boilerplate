/// <reference types="@types/jest" />
import { put, select } from "redux-saga/effects";
import { GithubActions } from "../../Reducers/GithubReducers";
import { selectAvatar, startup } from "./index";

const stepper = (fn) => (mock) => fn.next(mock).value;

test("watches for the right action", () => {
  const step = stepper(startup());
  expect(step()).toEqual(select(selectAvatar));
  expect(step()).toEqual(put(GithubActions.userRequest({username: "ascorbic"})));
});

/// <reference types="@types/jest" />
import { path } from "ramda";
import { call, put } from "redux-saga/effects";
import { GithubActions } from "../../Reducers/GithubReducers";
import FixtureAPI from "../../Services/FixtureApi";
import { getUserAvatar } from "./index";

const stepper = (fn) => (mock?) => fn.next(mock).value;

test("first calls API", () => {
  const step = stepper(getUserAvatar(FixtureAPI, GithubActions.userRequest({username: "ascorbic"})));
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getUser, "ascorbic"));
});

test("success path", () => {
  FixtureAPI.getUser("ascorbic").then((response) => {

    // tslint:disable-next-line:max-line-length
    const step = stepper(getUserAvatar(FixtureAPI, GithubActions.userRequest({username: "ascorbic"})));
    // first step API
    step();
    // Second step successful return
    const stepResponse = step(response);
    // Get the avatar Url from the response
    const firstUser = path(["data", "items"], response)[0];
    const avatar = firstUser.avatar_url;
    expect(stepResponse).toEqual(put(GithubActions.userSuccess(avatar)));
  });
});

test("failure path", () => {
  const response = {ok: false};
  const step = stepper(getUserAvatar(FixtureAPI, GithubActions.userRequest({username: "ascorbic"})));
  // first step API
  step();
  // Second step failed response
  expect(step(response)).toEqual(put(GithubActions.userFailure()));
});

/// <reference types="@types/jest" />
import { GithubActions, GithubReducer, INITIAL_STATE } from "./index";

test("request", () => {
  const username = "taco";
  const state = GithubReducer(INITIAL_STATE, GithubActions.userRequest({username}));

  expect(state.fetching).toBe(true);
  expect(state.username).toBe(username);
  expect(state.avatar).toBeNull();
});

test("success", () => {
  const avatar = "http://placekitten.com/200/300";
  const state = GithubReducer(INITIAL_STATE, GithubActions.userSuccess({avatar}));

  expect(state.fetching).toBe(false);
  expect(state.avatar).toBe(avatar);
  expect(state.error).toBeNull();
});

test("failure", () => {
  const state = GithubReducer(INITIAL_STATE, GithubActions.userFailure());

  expect(state.fetching).toBe(false);
  expect(state.error).toBe(true);
  expect(state.avatar).toBeNull();
});

/// <reference types="@types/jest" />
import * as R from "ramda";
import FixtureAPI from "../../App/Services/FixtureApi";
import API from "../../App/Services/GithubApi";

test("All fixtures map to actual API", () => {
  const fixtureKeys = R.keys(FixtureAPI).sort();
  const apiKeys = R.keys(API.createAPI());

  const intersection = R.intersection(fixtureKeys, apiKeys).sort();

  // There is no difference between the intersection and all fixtures
  expect(R.equals(fixtureKeys, intersection)).toBe(true);
});

test("FixtureAPI getRate returns the right file", () => {
  const expectedFile = require("../../App/Fixtures/rateLimit.json");

  return FixtureAPI.getRate().then((data) => expect(data).toEqual({
    ok: true,
    data: expectedFile,
  }));
});

test("FixtureAPI getUser returns the right file for gantman", () => {
  const expectedFile = require("../../App/Fixtures/gantman.json");
  return FixtureAPI.getUser("GantMan").then((data) => expect(data).toEqual({
    ok: true,
    data: expectedFile,
  }));
});

test("FixtureAPI getUser returns the right file for skellock as default", () => {
  const expectedFile = require("../../App/Fixtures/skellock.json");
  return FixtureAPI.getUser("Whatever").then((data) => expect(data).toEqual({
    ok: true,
    data: expectedFile,
  }));
});

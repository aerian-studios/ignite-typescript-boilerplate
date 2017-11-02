import {ApiResponse} from "apisauce";
import {GithubApi, GithubResponse} from "./GithubApi";

export default {
  // Functions return fixtures
  getRoot: (): Promise<ApiResponse<GithubResponse>> => {
    return Promise.resolve({
      ok: true,
      data: require("../Fixtures/root.json"),
    } as ApiResponse<any>);
  },
  getRate: (): Promise<ApiResponse<GithubResponse>> => {
    return Promise.resolve({
      ok: true,
      data: require("../Fixtures/rateLimit.json"),
    } as ApiResponse<any>);
  },
  getUser: (username: string): Promise<ApiResponse<GithubResponse>> => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require("../Fixtures/gantman.json");
    const skellockData = require("../Fixtures/skellock.json");
    return Promise.resolve({
      ok: true,
      data: username.toLowerCase() === "gantman" ? gantmanData : skellockData,
    } as ApiResponse<GithubResponse>);
  },
} as GithubApi;

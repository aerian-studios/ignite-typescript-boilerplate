// a library to wrap and simplify api calls
import {ApiResponse, create as apicreate} from "apisauce";

export interface GithubApi {
  getRoot: () => Promise<ApiResponse<{}>>;
  getRate: () => Promise<ApiResponse<{}>>;
  getUser: (username: string) => Promise<ApiResponse<GithubResponse>>;
}

export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User";
  site_admin: boolean;
  score: number;
}

export interface GithubResponse {
  total_count: number;
  incomplete_results: false;
  items: GithubUser[];
}

// our "constructor"
export const createAPI = (baseURL = "https://api.github.com/"): GithubApi => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apicreate({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      "Cache-Control": "no-cache",
    },
    // 10 second timeout...
    timeout: 10000,
  });

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRoot = () => api.get<GithubResponse>("");
  const getRate = () => api.get<GithubResponse>("rate_limit");
  const getUser = (username: string) => api.get<GithubResponse>("search/users", {q: username});

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getRate,
    getUser,
  };
};

// let's return back our create method as the default.
export default {
  createAPI,
};

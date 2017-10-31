import { ApiResponse } from "apisauce";
import { path } from "ramda";
import { call, put } from "redux-saga/effects";
import { GithubAction, GithubActions } from "../Redux/GithubRedux";
import { GithubApi, GithubResponse, GithubUser } from "../Services/Api";

export function * getUserAvatar(api: GithubApi, action: GithubAction) {
  const { username } = action;
  // make the call to the api
  const response: ApiResponse<GithubResponse> = yield call(api.getUser, username);

  if (response.ok) {
    const firstUser = path<GithubUser[]>(["data", "items"], response)[0];
    const avatar = firstUser.avatar_url;
    // do data conversion here if needed
    yield put(GithubActions.userSuccess(avatar));
  } else {
    yield put(GithubActions.userFailure());
  }
}

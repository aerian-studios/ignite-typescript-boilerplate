import { ApiResponse } from "apisauce";
import { path } from "ramda";
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { GithubAction, GithubActions } from "../../Reducers/GithubReducers";
import { GithubApi, GithubResponse, GithubUser } from "../../Services/GithubApi";

export function * getUserAvatar(api: GithubApi, action: GithubAction): SagaIterator {
  const { payload } = action;
  // make the call to the api
  const response: ApiResponse<GithubResponse> = yield call(api.getUser, payload.username);

  if (response.ok) {
    const firstUser = path<GithubUser[]>(["data", "items"], response)[0];
    const avatar = firstUser.avatar_url;
    // do data conversion here if needed
    yield put(GithubActions.userSuccess({avatar}));
  } else {
    yield put(GithubActions.userFailure());
  }
}

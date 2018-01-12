import { Action, AnyAction, Reducer } from "redux";
import * as SI from "seamless-immutable";
import { createAction, PayloadAction } from "typesafe-actions";
import { mapReducers, ReducerMap } from "../../Lib/ReduxHelpers";

/* ------------- Types and Action Creators ------------- */
interface RequestParams {username: string; }
interface SuccessParams {avatar: string; }
const actions = {
  userRequest: createAction("githubUserRequest", (params: RequestParams) =>
    ({type: "githubUserRequest", payload: params})),
  userSuccess: createAction("githubUserSuccess", (params: SuccessParams) =>
    ({type: "githubUserSuccess", payload: params})),
  userFailure: createAction("githubUserFailure"),
};

export const GithubActions = actions;

interface GithubState {
  avatar?: string | null;
  fetching?: boolean | null;
  error?: boolean | null;
  username?: string | null;
}

export type GithubAction = PayloadAction<string, GithubState>;

export type ImmutableGithubState = SI.ImmutableObject<GithubState>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE: ImmutableGithubState = SI.from({
  avatar: null,
  fetching: null,
  error: null,
  username: null,
});

/* ------------- Reducers ------------- */

// request the avatar for a user
export const userRequest: Reducer<ImmutableGithubState> =
  (state: ImmutableGithubState, { payload }: AnyAction & {payload?: RequestParams}) =>
    payload ? state.merge({ fetching: true, username: payload.username, avatar: null }) : state;

// successful avatar lookup
export const userSuccess: Reducer<ImmutableGithubState> =
  (state: ImmutableGithubState, { payload }: AnyAction & {payload?: SuccessParams}) =>
  payload ? state.merge({ fetching: false, error: null, avatar: payload.avatar }) : state;

// failed to get the avatar
export const userFailure: Reducer<ImmutableGithubState> = (state: ImmutableGithubState) =>
  state.merge({ fetching: false, error: true, avatar: null });

/* ------------- Hookup Reducers To Types ------------- */

const reducerMap: ReducerMap<typeof actions, ImmutableGithubState> = {
  userRequest,
  userSuccess,
  userFailure,
};

export const GithubReducer = mapReducers(INITIAL_STATE, reducerMap, actions);

export default GithubReducer;

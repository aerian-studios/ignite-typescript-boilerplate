import { Action, Reducer } from "redux";
import * as SI from "seamless-immutable";
import { createAction, PayloadAction } from "ts-redux-actions";
import { mapReducers, ReducerMap } from "../../Lib/ReduxHelpers";

/* ------------- Types and Action Creators ------------- */

const actions = {
  githubUserRequest: createAction("githubUserRequest", (payload: {username: string}) =>
    ({type: "githubUserRequest", payload})),
  githubUserSuccess: createAction("githubUserSuccess", (payload: {avatar: string}) =>
    ({type: "githubUserSuccess", payload})),
  githubUserFailure: createAction("githubUserFailure"),
};

export const GithubActions = actions;

interface GithubState {
  avatar?: string | null;
  fetching?: boolean | null;
  error?: boolean | null;
  username?: string | null;
}

export type GithubAction = GithubState & Action;

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
export const githubUserRequest: Reducer<ImmutableGithubState> =
  (state: ImmutableGithubState, { username }: GithubAction) =>
    state.merge({ fetching: true, username, avatar: null });

// successful avatar lookup
export const githubUserSuccess: Reducer<ImmutableGithubState> = (state: ImmutableGithubState, action: GithubAction) => {
  const { avatar } = action;
  return state.merge({ fetching: false, error: null, avatar });
};

// failed to get the avatar
export const githubUserFailure: Reducer<ImmutableGithubState> = (state: ImmutableGithubState) =>
  state.merge({ fetching: false, error: true, avatar: null });

/* ------------- Hookup Reducers To Types ------------- */

const reducerMap: ReducerMap<typeof actions, ImmutableGithubState> = {
  githubUserRequest,
  githubUserSuccess,
  githubUserFailure,
};

export const GithubReducer = mapReducers(INITIAL_STATE, reducerMap, actions);

export default GithubReducer;

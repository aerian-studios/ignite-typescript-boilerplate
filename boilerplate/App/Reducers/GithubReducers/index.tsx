import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";
import * as SI from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ["username"],
  userSuccess: ["avatar"],
  userFailure: null,
});

export const GithubTypes = Types;
export const GithubActions = Creators;

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
export const request: Reducer<ImmutableGithubState> = (state: ImmutableGithubState, { username }: GithubAction) =>
  state.merge({ fetching: true, username, avatar: null });

// successful avatar lookup
export const success: Reducer<ImmutableGithubState> = (state: ImmutableGithubState, action: GithubAction) => {
  const { avatar } = action;
  return state.merge({ fetching: false, error: null, avatar });
};

// failed to get the avatar
export const failure = (state: ImmutableGithubState) =>
  state.merge({ fetching: false, error: true, avatar: null });

/* ------------- Hookup Reducers To Types ------------- */

export const GithubReducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
});

export default GithubReducer;

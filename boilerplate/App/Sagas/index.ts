import { all, takeLatest } from "redux-saga/effects";
import DebugConfig from "../Config/DebugConfig";
import FixtureAPI from "../Services/FixtureApi";
import {createAPI, GithubApi} from "../Services/GithubApi";

/* ------------- Types ------------- */

import { GithubTypes } from "../Reducers/GithubReducers";
import { StartupTypes } from "../Reducers/StartupReducers";

/* ------------- Sagas ------------- */

import { getUserAvatar } from "./GithubSagas";
import { startup } from "./StartupSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : createAPI();

/* ------------- Connect Types To Sagas ------------- */

export default function * root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
  ]);
}

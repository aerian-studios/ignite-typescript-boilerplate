import { all, takeLatest } from "redux-saga/effects";
import DebugConfig from "../Config/DebugConfig";
import API from "../Services/Api";
import FixtureAPI from "../Services/FixtureApi";

/* ------------- Types ------------- */

import { GithubTypes } from "../Redux/GithubRedux";
import { StartupTypes } from "../Redux/StartupRedux";

/* ------------- Sagas ------------- */

import { getUserAvatar } from "./GithubSagas";
import { startup } from "./StartupSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
  ]);
}

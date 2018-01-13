import { is } from "ramda";
import Reactotron from "reactotron-react-native";
import { Action } from "redux";
import { SagaIterator } from "redux-saga";
import { put, select } from "redux-saga/effects";
import { GithubAction, GithubActions } from "../../Reducers/GithubReducers";
import { StartupActions } from "../../Reducers/StartupReducers";

// exported to make available for tests
export const selectAvatar = (state: any) => state.github.avatar;

// process STARTUP actions
export function * startup(action?: Action): SagaIterator {
  if (__DEV__) {
    // straight-up string logging
    Reactotron.log("Hello, I'm an example of how to log via Reactotron.");
    Reactotron.log(action);
    // logging an object for better clarity
    Reactotron.log({
      message: "pass objects for better logging",
      someGeneratorFunction: selectAvatar,
    });

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true, circularDependency: undefined as any};
    subObject.circularDependency = subObject; // osnap!
    Reactotron.display({
      name: "🔥 IGNITE 🔥",
      preview: "You should totally expand this",
      value: {
        "💃": "Welcome to the future!",
        subObject,
        "someInlineFunction": () => true,
        "someGeneratorFunction": startup,
        "someNormalFunction": selectAvatar,
      },
    });
  }
  const avatar = yield select(selectAvatar);
  // only get if we don't have it yet
  if (!is(String, avatar)) {
    yield put(GithubActions.userRequest({username: "ascorbic"}));
  }

}

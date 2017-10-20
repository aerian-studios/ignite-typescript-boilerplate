import { combineReducers } from "redux";
import root from "../Sagas";
import configureStore from "./CreateStore";
import {reducer as github} from "./GithubRedux";
import {reducer as nav} from "./NavigationRedux";
import {reducer as search} from "./SearchRedux";

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav,
  github,
  search,
});

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, root);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require("../Sagas").default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};

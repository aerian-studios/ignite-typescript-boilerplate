import { createAction } from "ts-redux-actions";

/* ------------- Types and Action Creators ------------- */

const actions = {
  startup: createAction("startup"),
};

export const StartupActions = actions;

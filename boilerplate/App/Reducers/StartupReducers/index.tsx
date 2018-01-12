import { createAction } from "typesafe-actions";

/* ------------- Types and Action Creators ------------- */

const actions = {
  startup: createAction("startup"),
};

export const StartupActions = actions;

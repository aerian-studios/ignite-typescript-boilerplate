import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
});

export const StartupTypes = Types;
export const StartupActions = Creators;

import AppNavigation from "../../Navigation/AppNavigation";

export const NavigationReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

import { NavigationAction, NavigationState } from "react-navigation";
import AppNavigation from "../../Navigation/AppNavigation";

export type NavigationState = NavigationState;

export const NavigationReducer = (state: NavigationState, action: NavigationAction) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

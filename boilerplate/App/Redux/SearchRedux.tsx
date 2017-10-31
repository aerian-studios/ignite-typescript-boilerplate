import { filter, startsWith } from "ramda";
import { Action, Reducer } from "redux";
import { createActions, createReducer } from "reduxsauce";
import * as SI from "seamless-immutable";

const LIST_DATA = ["sausage", "blubber", "pencil", "cloud", "moon", "water", "computer", "school",
  "network", "hammer", "walking", "violently", "mediocre", "literature", "chair", "two", "window",
  "cords", "musical", "zebra", "xylophone", "penguin", "home", "dog", "final", "ink", "teacher", "fun",
  "website", "banana", "uncle", "softly", "mega", "ten", "awesome", "attatch", "blue", "internet", "bottle",
  "tight", "zone", "tomato", "prison", "hydro", "cleaning", "telivision", "send", "frog", "cup", "book",
  "zooming", "falling", "evily", "gamer", "lid", "juice", "moniter", "captain", "bonding", "loudly", "thudding",
  "guitar", "shaving", "hair", "soccer", "water", "racket", "table", "late", "media", "desktop", "flipper",
  "club", "flying", "smooth", "monster", "purple", "guardian", "bold", "hyperlink", "presentation", "world", "national",
  "comment", "element", "magic", "lion", "sand", "crust", "toast", "jam", "hunter", "forest", "foraging",
  "silently", "tawesomated", "joshing", "pong", "RANDOM", "WORD",
];

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ["searchTerm"],
  cancelSearch: null,
});

export const TemperatureTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export interface SearchState {
  searchTerm: string;
  searching: boolean;
  results: string[];
}

export type SearchAction = SearchState & Action;

export type ImmutableSearchState = SI.ImmutableObject<SearchState>;

export const INITIAL_STATE: ImmutableSearchState = SI.from<SearchState>({
  searchTerm: "",
  searching: false,
  results: LIST_DATA,
});

/* ------------- Reducers ------------- */

export const performSearch: Reducer<ImmutableSearchState> = (state: ImmutableSearchState,
                                                             { searchTerm }: SearchAction) => {
  const results = filter(startsWith(searchTerm), LIST_DATA);
  return state.merge({ searching: true, searchTerm, results });
};

export const cancelSearch: Reducer<ImmutableSearchState> = (state: ImmutableSearchState) => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer: Reducer<ImmutableSearchState> = createReducer(INITIAL_STATE, {
  [Types.SEARCH]: performSearch,
  [Types.CANCEL_SEARCH]: cancelSearch,
});

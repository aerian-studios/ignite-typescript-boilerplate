import { ActionCreator, AnyAction, Reducer, ReducersMapObject } from "redux";
import { createAction, EmptyAction, PayloadAction } from "ts-redux-actions";

type ActionMap<T> = {
    readonly [P in keyof T]: PayloadAction<string, any> | EmptyAction<string>;
};

export type ReducerMap<A, S> = {
    readonly [T in keyof A]: Reducer<S>;
};

export function mapReducers<S, R extends ReducersMapObject>(
    initialState: S,
    reducers: R,
    actions: ActionMap<R>): Reducer<S> {
    const reducerMap = new Map(Object.entries(actions).map(([key, val]): [string, Reducer<any>] =>
        [val.type, reducers[key]]));

    return (state: S = initialState, action: AnyAction) => {
        if (!("type" in action)) {
            return state;
        }
        const reducer = reducerMap.get(action.type);
        if (!reducer) {
            return state;
        }
        return reducer(state, action);
    };
}

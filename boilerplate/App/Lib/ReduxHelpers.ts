import { ActionCreator, AnyAction, Reducer, ReducersMapObject } from "redux";
import { createAction, EmptyAction, FluxStandardAction, getType, PayloadAction, TypeGetter } from "typesafe-actions";

export type FluxActionCreator<T extends string, AC extends (...args: any[]) => FluxStandardAction<T> = any> = AC & TypeGetter<T>;

type ActionCreatorMap<T> = {
    readonly [P in keyof T]: FluxActionCreator<P>;
};

export type ReducerMap<A, S> = {
    readonly [T in keyof A]: Reducer<S>;
};

export function mapReducers<S, R extends ReducersMapObject>(
    initialState: S,
    reducers: R,
    actionCreators: ActionCreatorMap<R>): Reducer<S> {
    const reducerMap = new Map(Object.entries(actionCreators).map(([key, val]): [string, Reducer<any>] =>
        [getType(val), reducers[key]]));

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

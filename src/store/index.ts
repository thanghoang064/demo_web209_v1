import { Store, applyMiddleware, combineReducers, createStore } from "redux"
import { ICounterState } from "./counter/reducer"
import { CounterAction } from "./counter/action"
import { DispatchType } from "./counter/type"
import counterReducer from './counter/reducer'
import thunk from "redux-thunk"
import sinhVienReducer, { ISinhVienState } from "./sinhvien/reducer"

export interface IRootState {
    counter: ICounterState,
    sinhvien : ISinhVienState
}

export type RootActions = CounterAction
//global state là nó sẽ chứa rất nhiều state
const rootReducer = combineReducers({
    counter: counterReducer,
    sinhvien : sinhVienReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
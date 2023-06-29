import * as actionTypes from './type'
import { DispatchType } from './type'

export type CounterAction = {
    type: string
    payload: number
}


export function increaseCountAction(count: number) {
    const action: CounterAction = {
        type: actionTypes.INCREASE_COUNT,
        payload: count
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}
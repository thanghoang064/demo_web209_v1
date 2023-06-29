import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ICounterState } from "../store/counter/reducer"
import { IRootState } from "../store"

const ComponetB = () => {

    const counterState = useSelector(
        (state: IRootState) => state.counter,
        shallowEqual
    )

    return (
        <>
            <h2>Component B received counter value: {counterState.counter}</h2>
        </>
    )
}

export default ComponetB;

import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { increaseCountAction } from "../store/counter/action"



const ComponetAA = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const increase = () => {
        dispatch(increaseCountAction(1))
    }
    return (
        <>
            <h2>Component AA la con cua component A</h2>
            <button onClick={increase}>Increase from component AA</button>
        </>
    )
}

export default ComponetAA;

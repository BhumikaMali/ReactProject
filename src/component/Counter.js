import { decrement, increment } from "../slice/counterSlice"
import { useSelector,useDispatch } from 'react-redux'

function Counter () {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <> 
            <button onClick={() => dispatch(decrement())}>-</button>
            {count}
            <button onClick={() => dispatch(increment())}>+</button>
        </>
    )
}
export default Counter
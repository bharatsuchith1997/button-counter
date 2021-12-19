import React, { useState } from 'react'
import { setCount } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount } from '../actions'

const Counter = (props) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const [value, setValue] = useState(props.initialCount);
    const [error, setError] = useState('');

    const setValueChange = (e) => {
        setValue(parseInt(e.target.value))
    }
    const setCounter = () => {
        if (Number.isInteger(value)) {
            setError('');
            dispatch(setCount(value));
        }
        else {
            setError('Value must be an integer')
        }
    }
    return (
        <>
            <input type="text" onChange={setValueChange} /><button onClick={setCounter}>Set Counter</button>
            <br />
            {error !== '' && <span style={{ color: "red" }}>{error}</span>}
            <h1>{count}</h1>
            <button id="minusBtn" onClick={() => dispatch(decreaseCount(count))}>-</button>
            <button id="plusBtn" onClick={() => dispatch(increaseCount(count))}>+</button>
        </>
    )
}

export default Counter
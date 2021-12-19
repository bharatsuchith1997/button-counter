import React,{useState} from 'react'
import Controllers from "./Controllers"
import {setCount} from '../actions'
import { useSelector,useDispatch } from 'react-redux'

const Counter = (props) => {
    const dispatch = useDispatch();
    const [value,setValue] = useState(props.initialCount);
    const [error,setError] = useState('');

    const count = useSelector(state => state.count);
    const setValueChange = (e) =>{
        setValue(parseInt(e.target.value))
    }
    const setCounter = () =>{
        if(Number.isInteger(value)){
            setError('');
            dispatch(setCount(value));
        }
        else{
            setError('Value must be an integer')   
        }
    }
    return (
        <>
            <input type="text" onChange={setValueChange} /><button onClick={setCounter}>Set Counter</button>
            <br/>
            {error!=='' && <span style={{color:"red"}}>{error}</span>}
            <h1>{count}</h1>
            <Controllers />
        </>
    )
}

export default Counter
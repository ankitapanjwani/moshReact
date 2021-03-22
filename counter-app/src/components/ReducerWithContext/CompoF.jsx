import React,{useContext} from 'react'
import {CountContext} from '../../App';

function CompoF() {
    // console.log("In Component F");
    const countContext = useContext(CountContext);
    return (
        <div>
            <button onClick={()=>countContext?.countDispatch('increment')}>+</button>
            <button onClick={()=>countContext?.countDispatch('decrement')}>-</button>
            <button onClick={()=>countContext?.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompoF

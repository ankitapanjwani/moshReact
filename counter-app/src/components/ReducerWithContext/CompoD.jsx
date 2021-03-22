import React,{useContext} from 'react'
import {CountContext} from '../../App';

function CompoD() {
    // console.log("In Componenet D");
    const countContext = useContext(CountContext);
    // console.log("In D:",countContext);
    return (
        <div>
            <button onClick={()=>countContext?.countDispatch('increment')}>+</button>
            <button onClick={()=>countContext?.countDispatch('decrement')}>-</button>
            <button onClick={()=>countContext?.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompoD

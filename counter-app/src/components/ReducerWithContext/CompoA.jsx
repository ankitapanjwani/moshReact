import React,{useContext} from 'react'
import {CountContext} from '../../App'

function CompoA() {
    const countContext = useContext(CountContext);
    // console.log("In componnet A",countContext.countState);
    return (
        <div>
            <button onClick={()=>countContext.countDispatch('increment')}>+</button>
            <button onClick={ ()=>countContext.countDispatch('decrement')}>-</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompoA

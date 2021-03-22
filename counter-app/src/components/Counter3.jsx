import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {

    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter3() {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);


    return (
        <>
            <div>
                <p>First Counter</p>
                <div>Count :  {count}</div>
                <button onClick={() => dispatch('increment')}>+</button>
                <button onClick={count >0 ? () => dispatch('decrement'): null}>-</button>
                <button onClick={() => dispatch('reset')}>Reset</button><br/><br/>
            </div>
            <div>
               
                <p>Second Counter</p>
                <div>Count :  {count2}</div>
                <button onClick={() => dispatch2('increment')}>+</button>
                <button onClick={count2 >0 ? () => dispatch2('decrement'): null}>-</button>
                <button onClick={() => dispatch2('reset')}>Reset</button>
            </div>
        </>
    )
}

export default Counter3

import React, { useReducer } from 'react'

const initialState = {
    firstcounter: 0,
    secondcounter: 10
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'increment1':
            return { ...state,firstcounter: state.firstcounter + action.value }
        case 'decrement1':
            return { ...state,firstcounter: state.firstcounter - action.value }
        case 'increment2':
            return {... state, secondcounter: state.secondcounter + action.value }
        case 'decrement2':
            return { ... state,secondcounter: state.secondcounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter2() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>1st Counter :  {count, count.firstcounter}</div>
            <div>2nd Counter :  {count, count.secondcounter}</div>
            <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>Increment by 1</button>
            <button onClick={count.firstcounter > 0 ? () => dispatch({ type: 'decrement1', value: 1 }) : null}>Decrement by 1</button>
            <button onClick={() => dispatch({ type: 'increment1', value: 5 })}>Increment by 5</button>
            <button onClick={count.firstcounter > 0 ? () => dispatch({ type: 'decrement1', value: 5 }) : null}>Decrement by 5</button>
            <br />
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment secondcounter by 1</button>
            <button onClick={count.secondcounter > 0 ? () => dispatch({ type: 'decrement2', value: 1 }) : null}>Decrement secondcounter by 1</button>
           <br/> <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </div>
    )
}

export default Counter2

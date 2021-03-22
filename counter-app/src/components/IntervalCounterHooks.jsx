import React from 'react'
import { useEffect, useState } from "react";

function IntervalCounterHooks() {
    const[count,setcount] = useState(0);

    const tick = () =>{
        setcount(prevCount => prevCount + 1);
    }

    useEffect(()=>{
        const interval = setInterval(tick,1000);
    
        //clean up effects
        return  () =>{
            clearInterval(interval);
        }
    },[]);
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalCounterHooks

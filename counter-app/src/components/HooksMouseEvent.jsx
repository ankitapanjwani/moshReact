import React from 'react'
import { useEffect, useState } from "react";

function HooksMouseEvent() {
const[x,setx] = useState(0);
const[y,sety] = useState(0);
    
    const logMousePosition = e =>{
        console.log("mouse event");
        setx(e.clientX);
        sety(e.clientY);
    }

    useEffect(()=>{
        console.log("In UseEffect");
        window.addEventListener('mousemove', logMousePosition);

        //clean up 
        return () =>{
            console.log("Component unmount");
            window.removeEventListener('mousemove', logMousePosition);
        }
    },[])

    return (
        <div>
            X: {x} Y: {y}
         
        </div>
    )
}

export default HooksMouseEvent

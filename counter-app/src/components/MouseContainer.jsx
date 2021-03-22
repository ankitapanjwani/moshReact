import React from 'react'
import { useEffect, useState } from "react";
import HooksMouseEvent from './HooksMouseEvent';


function MouseContainer() {
    const[display,setDisplay] = useState(true);

    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {display && <HooksMouseEvent />}
        </div>
    )
}

export default MouseContainer

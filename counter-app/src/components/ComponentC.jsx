import React ,{useContext} from 'react'
import {ThemeContext} from '../App';
function ComponentC() {

    const theme = useContext(ThemeContext);
    return (
        <div>
            
                {/* {
                    user =>{
                       return  <div>User value coming from parents is : {user}</div>
                    }
                } */}
                <button style={{ background: theme.background, color: theme.foreground }}>
                I am styled by theme context!
                </button>    
          
        </div>
    )
}

export default ComponentC

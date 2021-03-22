import React from 'react'
import { useEffect, useState } from "react";
import  axios  from 'axios';


function FetchHooks() {

    const[post, setpost] = useState({});
    const[id,setId] = useState(1);
    const[btnValueId,setbtnValueId] =  useState(1);
// console.log(posts);
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${btnValueId}`)
      .then(res =>{
          console.log(res);
          setpost(res.data);
      }).catch(err => {
          console.log(err);
      })
    },[btnValueId])


   const  handleclick= ()=>{
console.log("in handleclick")
setbtnValueId(id)
    }
    return (
        <div>

            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <br/><br/>      
            <button type="button"  onClick={handleclick}>Fetch Post</button>
        <div>{post.title}</div>

           {/* <ul>
               {
                   posts?.map(post => <li key={post.id}>{post.title}</li>)
               }
           </ul> */}
        </div>
    )
}

export default FetchHooks

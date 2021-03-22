import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function DataFetching() {
    const[loading, setloading] = useState(true);
    const[error, seterror] = useState('');
    const[post, setpost] = useState({});
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setloading(false);
            seterror('');
            setpost(response.data);
        })
        .catch(err =>{
            setloading(false);
            setpost({});
            seterror('Something Went Wrong!!!');
        })
    },[])
    return (
        <div>
            {loading ? 'Loading....' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetching

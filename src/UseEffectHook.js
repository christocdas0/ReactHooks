import React, { useState, useEffect } from 'react';
import axios from 'axios';



function UseEffectHook() {
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then(response =>{
            setData(response.data[count]);
        }).catch(err =>{
            console.log(err);
        })
    }, [count]);
  return (
    <>
    <p>
        Use Effect Hook.
    </p>
    <p>Showing {count} User Data. </p>
    <p>Name : {data.name}</p>
    <p>Email : {data.email}</p>
    <button onClick={() => setCount(count + 1)}>Get {count + 1}'th New User Data</button>
    </>
  )
}

export default UseEffectHook
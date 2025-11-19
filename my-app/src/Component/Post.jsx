import React, { useEffect, useState } from 'react'

const Post = () => {

   const [name , setName] =  useState("")
    const GetPost = async()=>{
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
         GetPost()
    },[])

   
    return (
        <>
            <h1>
                hello post 
            </h1>
            <input type="text" name="" id="" value={name } onChange={(e)=> setName(e.target.value)} />
        </>
    )
}

export default Post

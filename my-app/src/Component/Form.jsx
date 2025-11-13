import React from 'react'
// import { useRef } from 'react';
import { useState } from 'react'

const Form = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setpassword] = useState("");
//    const refpassword  = useRef()
//    const invalidForm = name && email  && password 

const invalidForm = name  && email  && password

    const onSubmit =(event)=>{
         event.preventDefault()
         console.log("event", event,{password, name, email, invalidForm})
    }

    console.log("render")
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
               <div>
                 <label htmlFor="Name">Name</label>
                <input type="text" required name="" id="" placeholder='Enter your name ' value={name}
                onChange={(e)=>{
                    console.log(e.target.value, "e.target.value  : ")
                    setName(e.target.value)
                }}
                />
               </div>
               <div>
                 <label htmlFor="email">email </label>
                <input type="email" required name="" id="" placeholder='Enter your email ' value={email}
                 onChange={(e)=>{
                    console.log(e.target.value, "e.target.value  : ")
                    setEmail(e.target.value)
                }}
                />
               </div>
                <div>
                 <label htmlFor="password">password </label>
                <input type="password" required name="" id="password" placeholder='Enter your password '
                value={password}
                onChange={(e)=> {
                    console.log(e.target.value)
                    setpassword(e.target.value)
                }}
                
                />
               </div>
               <button disabled={!invalidForm}>submit</button>
            </form>
        </div>
    )
}

export default Form

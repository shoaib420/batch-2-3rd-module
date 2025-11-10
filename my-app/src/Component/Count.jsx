import React, { useState } from 'react'

 const Count = () => {
    const [count,  setcount] = useState(5)
    // let count = 0;
    const add = ()=>{
        setcount(count + 5)
        // count = count + 1
        console.log("increment ", count)
    }

    const subtract = ()=>{
        //  count = count - 1
        setcount( count - 1)
         console.log("deccrement ", count)
    }
    return (
        <div>
            <button onClick={add}>+ n</button>
            <h1>{count}</h1>
            <button onClick={subtract}>-</button>

        </div>
    )
}

export default Count
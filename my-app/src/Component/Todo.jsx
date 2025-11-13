import {useState} from 'react'

export const Todo = () => {
    const [Newtodo, setNewtodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(Newtodo){
            setTodos([...todos, {text : Newtodo, completed : false}])
            setNewtodo("")
        }
    }
    const HandleDelete = ()=> {


    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" value={Newtodo} 
                 onChange={(e)=> setNewtodo(e.target.value)} 
                 id="" />
                <button type='submit'>add</button>
                <ol>
                    {todos.map((todo, ind)=>(
                        <li key={ind}>
                            {todo.text}
                        </li>
                    ))}
                </ol>

                
            </form>
        </div>
    )
}

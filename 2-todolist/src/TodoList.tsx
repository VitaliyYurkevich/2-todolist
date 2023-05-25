import React from "react";


export type TasksType = {
    id: number
    title: string
    isDone: boolean
}
console.log('')

export type TodoListType = {
    title: string
    tasks: Array<TasksType>
}


function TodoList(props:TodoListType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((t)=>{
                       return(
                        <li>
                            <input type={"checkbox"} checked={t.isDone}/>
                           <span>{t.title}</span>
                        <button>x</button>
                        </li>
                )})
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList
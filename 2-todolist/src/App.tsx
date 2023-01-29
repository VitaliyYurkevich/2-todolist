import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
  let tasks = [
      {id: 1, title: 'HTML', isDone: true},
      {id: 2, title: 'js', isDone: true},
      {id: 3, title: '231', isDone: true}
    ]

const RemoveTask = (id:number) => {
      let deleteTask = tasks.filter((t)=>{t => t.id !== id})
}




    return (
        <div className="App">
           <TodoList title={'What to learn?'}
           tasks={tasks}
           />

        </div>
    );
}

export default App;

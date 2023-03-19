import './Task.css';

function Task({task, completar, deleteTodo, edit}){
    return(
        <div className='task'>
            <div className='check'><input type="checkbox"/>
            <p onClick={() => completar(task.id)} className={`${task.completed ? 'completed' :'' }`}>   {task.task}</p></div>
            
            <div className='icons'>
                <span onClick={() => edit(task.id)}>&#9998;</span>
                <span onClick={() => deleteTodo(task.id)}>&#10006;</span>
            </div>
           
        </div>
        
    )
}

export default Task
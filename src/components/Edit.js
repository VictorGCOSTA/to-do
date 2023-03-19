import React, { useState } from "react";
import './Edit.css';

function Edit({editTask, task}){
    var i = 1;
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id)
        setValue("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="input" onChange={(e) => setValue(e.target.value)} placeholder="Atualizar Tarefa" type="text" value={value}/>
            <button type="submit">Atualizar</button>
        </form>
    )
}

export default Edit
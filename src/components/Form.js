import React, { useState } from "react";
import './Form.css';

function Form({addTask}){
    var i = 1;
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(value)
        setValue("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <div><input className="input" onChange={(e) => setValue(e.target.value)} type="text" value={value} placeholder="Adiconar uma tarefa"/></div>
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default Form
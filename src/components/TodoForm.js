import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        /* Estas son las propiedades que le seteo a cada lista */
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input 
                        type="text" 
                        placeholder="Editar tarea" 
                        value={input} 
                        name="text" 
                        className="todo-input" 
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Editar tarea</button>
                </>
                ) : (
                <>
                    <input 
                        type="text" 
                        placeholder="Add a todo" 
                        value={input} 
                        name="text" 
                        className="todo-input" 
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Add todo</button>
                </>
                )
            }
        </form>
    )
}

export default TodoForm
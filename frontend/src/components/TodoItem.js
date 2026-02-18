import { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleComplete, updateTodo }) => {

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);

    const handleUpdate = () => {
        updateTodo(todo.id, {
            ...todo,
            title,
            description
        });
        setEditMode(false);
    };

    return (
        <div className="todo-item">
            {editMode ? (
                <>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <h3 style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                        {todo.title}
                    </h3>
                    <p>{todo.description}</p>
                    <button onClick={() => toggleComplete(todo)}>
                        {todo.completed ? "Undo" : "Complete"}
                    </button>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TodoItem;
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./services/TodoService";
import "./App.css";

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        const res = await getTodos();
        setTodos(res.data);
    };

    const addTodo = async (todo) => {
        await createTodo(todo);
        loadTodos();
    };

    const removeTodo = async (id) => {
        await deleteTodo(id);
        loadTodos();
    };

    const toggleComplete = async (todo) => {
        await updateTodo(todo.id, {
            ...todo,
            completed: !todo.completed
        });
        loadTodos();
    };

    const editTodo = async (id, todo) => {
        await updateTodo(id, todo);
        loadTodos();
    };

    return (
        <div className="App">
            <h1>Todo Application</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                deleteTodo={removeTodo}
                toggleComplete={toggleComplete}
                updateTodo={editTodo}
            />
        </div>
    );
}

export default App;
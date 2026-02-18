import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleComplete, updateTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
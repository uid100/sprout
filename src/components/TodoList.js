import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Simulating fetching todos from a JSON file or API
        // You can replace this with your actual fetch logic
        const fetchData = async () => {
            try {
                // Simulating fetching todos from a JSON file
                const response = await fetch('/data/data.json')
                    .then(response => console.log(response));
                const data = await response.json();
                setTodos(data.todos || []);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchData();
    }, []);

    const handleToggle = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        // Simulating storing todos in local storage
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <div>
            <h2>Todo List</h2>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
            ))}
        </div>
    );
};

export default TodoList;

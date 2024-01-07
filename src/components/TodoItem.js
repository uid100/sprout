import React from 'react';

const TodoItem = ({ todo, onToggle }) => {
    const { id, text, completed } = todo;

    const handleToggle = () => {
        onToggle(id);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleToggle}
            />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {text}
            </span>
        </div>
    );
};

export default TodoItem;

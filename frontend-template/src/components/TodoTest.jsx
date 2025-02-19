"use client";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddTask from "../components/AddTask";

// Function to generate random todo objects
const generateRandomTodos = (count) => {
    const titles = [
        "Buy groceries",
        "Finish project report",
        "Go for a run",
        "Read a book",
        "Call mom",
        "Plan weekend trip",
        "Organize workspace",
        "Learn React",
        "Write blog post",
        "Attend meeting",
    ];

    const descriptions = [
        "Milk, eggs, bread, and fruits",
        "Deadline is tomorrow!",
        "5k run in the park",
        "Chapter 5 of 'Clean Code'",
        "Discuss family plans",
        "Book tickets and hotel",
        "Clean desk and organize files",
        "Complete the advanced hooks tutorial",
        "Draft on AI trends",
        "Team sync at 10 AM",
    ];

    const todos = [];
    for (let i = 0; i < count; i++) {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        const randomDescription =
            descriptions[Math.floor(Math.random() * descriptions.length)];
        const randomExpiresAt = new Date(
            Date.now() + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000
        ).toISOString(); // Random date within the next 7 days

        todos.push({
            id: Math.random().toString(36).substr(2, 9), // Random ID
            title: randomTitle,
            description: randomDescription,
            expiresAt: randomExpiresAt,
            completed: Math.random() > 0.5, // Random completion status
        });
    }
    return todos;
};

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    // Generate random todos on component mount
    useEffect(() => {
        const randomTodos = generateRandomTodos(5); // Generate 5 random todos
        setTodos(randomTodos);
    }, []);

    // Function to add a todo (used by the Todo component)
    const addTodo = (newTodo) => {
        setTodos([
            ...todos,
            { ...newTodo, id: Math.random().toString(36).substr(2, 9) },
        ]);
    };

    // Function to update a todo
    const updateTodo = async (id, updatedFields) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, ...updatedFields } : todo
            )
        );
    };

    // Function to delete a todo
    const deleteTodo = async (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="p-4">
            {/* Add Todo Form */}
            <AddTask addTodo={addTodo} />

            {/* Display Todos */}
            <ul className="card bg-base-100 shadow-lg rounded-lg p-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center p-4 border-b border-base-200"
                    >
                        {/* Todo Details */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                checked={todo.completed}
                                onChange={() =>
                                    updateTodo(todo.id, {
                                        completed: !todo.completed,
                                    })
                                }
                            />
                            <div>
                                <p
                                    className={
                                        todo.completed
                                            ? "line-through text-gray-400"
                                            : "font-bold"
                                    }
                                >
                                    {todo.title}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {todo.description}
                                </p>
                                {todo.expiresAt && (
                                    <p className="text-xs text-gray-500">
                                        Expires:{" "}
                                        {new Date(
                                            todo.expiresAt
                                        ).toLocaleString()}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Edit and Delete Buttons */}
                        <div className="flex gap-2">
                            <button
                                className="btn btn-ghost btn-sm"
                                onClick={() => {
                                    const newTitle = prompt(
                                        "Edit title:",
                                        todo.title
                                    );
                                    const newDescription = prompt(
                                        "Edit description:",
                                        todo.description
                                    );
                                    const newExpiresAt = prompt(
                                        "Edit expiration date (YYYY-MM-DDTHH:MM):",
                                        todo.expiresAt
                                    );
                                    if (
                                        newTitle !== null ||
                                        newDescription !== null ||
                                        newExpiresAt !== null
                                    ) {
                                        updateTodo(todo.id, {
                                            title: newTitle || todo.title,
                                            description:
                                                newDescription ||
                                                todo.description,
                                            expiresAt:
                                                newExpiresAt || todo.expiresAt,
                                        });
                                    }
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-ghost btn-sm"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            expiresAt: PropTypes.string,
            completed: PropTypes.bool.isRequired,
        })
    ),
};

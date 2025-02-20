"use client";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/api/endpoints/todos";
import AddTask from "../components/AddTask";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    // Fetch todos from the backend
    const { data, isFetching, isError, error } = useQuery({
        queryFn: getTodos,
        queryKey: ["todos"],
    });

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data]);

    // Function to add a todo (used by the Todo component)
    const addTodo = (newTodo) => {
        setTodos([
            ...todos,
            { ...newTodo, id: Math.random().toString(36).substr(2, 9) },
        ]);
    };

    // Function to update a todo
    const updateTodo = async (id, updatedFields) => {
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFields),
            });

            if (!response.ok) {
                throw new Error("Failed to update todo");
            }

            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, ...updatedFields } : todo
                )
            );
        } catch (error) {
            console.error("Error updating todo:", error);
            alert("Failed to update todo.");
        }
    };

    // Function to delete a todo
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete todo");
            }

            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
            alert("Failed to delete todo.");
        }
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

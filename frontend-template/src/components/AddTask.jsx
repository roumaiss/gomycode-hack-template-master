"use client";
import { useState } from "react";

export default function Todo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [expiresAt, setExpiresAt] = useState("");

    const handleAddTodo = async () => {
        if (!title.trim()) return; // Prevent empty todos

        const newTodo = {
            title,
            description,
            expiresAt: expiresAt || null, // Optional expiration date
            completed: false,
        };

        try {
            // Send the new todo to the backend
            const response = await fetch("/api/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodo),
            });

            if (!response.ok) {
                throw new Error("Failed to add todo");
            }

            // Clear the form after successful submission
            setTitle("");
            setDescription("");
            setExpiresAt("");

            // Optionally, you can call a function to refresh the todo list
            addTodo(newTodo);
        } catch (error) {
            console.error("Error adding todo:", error);
            alert("Failed to add todo.");
        }
    };

    return (
        <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box bg-base-100 shadow-lg p-4 mb-4 rounded-xl">
            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Todo Title"
                    className="input input-ghost w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Todo Description"
                    className="input input-ghost w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="datetime-local"
                    className="input input-ghost w-full"
                    value={expiresAt}
                    onChange={(e) => setExpiresAt(e.target.value)}
                />
                <button onClick={handleAddTodo} className="btn btn-primary">
                    Add Todo
                </button>
            </div>
        </div>
    );
}

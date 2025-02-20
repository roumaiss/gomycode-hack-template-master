import { apiConfig } from "../axiosConfig";

// Fetch all todos
export async function getTodos() {
    try {
        const response = await apiConfig.get("/todos");
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch todos: " + error.message);
    }
}

// Create a new todo
export async function createTodo(todo) {
    try {
        const response = await apiConfig.post("/todos", todo);
        return response.data;
    } catch (error) {
        throw new Error("Failed to create todo: " + error.message);
    }
}

// Update a todo
export async function updateTodo(id, updatedFields) {
    try {
        const response = await apiConfig.put(`/todos/${id}`, updatedFields);
        return response.data;
    } catch (error) {
        throw new Error("Failed to update todo: " + error.message);
    }
}

// Delete a todo
export async function deleteTodo(id) {
    try {
        const response = await apiConfig.delete(`/todos/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to delete todo: " + error.message);
    }
}

// Toggle todo completion status
export async function toggleTodoCompletion(id) {
    try {
        const response = await apiConfig.put(`/todos/completed/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to toggle todo completion: " + error.message);
    }
}

// Clear all completed todos
export async function clearTodosCompleted() {
    try {
        const response = await apiConfig.delete("/todos-completed");
        return response.data;
    } catch (error) {
        throw new Error("Failed to clear completed todos: " + error.message);
    }
}

// Save todos (optional, for bulk operations)
export async function saveTodos(todos) {
    try {
        const response = await apiConfig.post("/todos/save", todos);
        return response.data;
    } catch (error) {
        throw new Error("Failed to save todos: " + error.message);
    }
}

/* import { apiConfig } from "../axiosConfig";



export async function getTodos() {
    try {
        const response = await apiConfig.get("/todos");
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch todos ," + error.message);
    }
}

export async function createTodo(todo) {
    try {
        const response = await apiConfig.post("/todos", todo);
        return response.data;
    } catch (error) {
        throw new Error("Failed to create todo," + error.message);
    }
}

export async function updateTodo(id, newText) {
    try {
        console.log(`/todos/${id}`);
        const response = await apiConfig.put(`/todos/${id}`, { newText });
        return response.data;
    } catch (error) {
        throw new Error("Failed to update todo," + error.message);
    }
}

export async function deleteTodo(id) {
    try {
        const response = await apiConfig.delete(`/todos/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to delete todo," + error.message);
    }
}

export async function toggleTodoCompletion(id) {
    try {
        const response = await apiConfig.put(`/todos/completed/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to toggle todo completion," + error.message);
    }
}
export async function clearTodosCompleted() {
    try {
        const response = await apiConfig.delete(`todos-completed`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to delete all todos," + error.message);
    }
}



export function saveTodos(req, res) {
    if (req.method === "POST") {
        const todos = req.body;
        // Save todos to a database or file
        console.log("Received todos:", todos);
        res.status(200).json({ message: "Todos saved successfully!" });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
 */

"use client";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

export default function Home() {
    return (
        <div>
            <Navbar />
            <p>This is the Home page</p>
            <TodoList todos={[]} />
        </div>
    );
}

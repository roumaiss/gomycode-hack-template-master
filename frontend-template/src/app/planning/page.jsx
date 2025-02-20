import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "../components/Footer";

export default function page() {
    const todos = [
        {
            _id: "65a1b2c3d4e5f67890123456",
            userId: "60a123b456c789d012e34567",
            professionalId: "nutritionist",
            title: "Morning Workout",
            description: "Daily exercise to stay fit and active.",
            schedule: [
                {
                    date: "2025-02-20T00:00:00Z",
                    tasks: {
                        startTime: "2025-02-20T07:00:00Z",
                        endTime: "2025-02-20T08:00:00Z",
                        title: "Yoga Session",
                        description:
                            "A 1-hour yoga session to improve flexibility and mindfulness.",
                        completed: false,
                    },
                },
            ],
            createdAt: "2025-02-15T10:00:00Z",
            updatedAt: "2025-02-15T10:00:00Z",
        },
        {
            _id: "65b2c3d4e5f6789012345678",
            userId: "60b123c456d789e012f34567",
            professionalId: "nutritionist",

            title: "Healthy Meal Plan",
            description: "Structured meal planning for better nutrition.",
            schedule: [
                {
                    date: "2025-02-20T00:00:00Z",
                    tasks: {
                        startTime: "2025-02-20T12:30:00Z",
                        endTime: "2025-02-20T13:00:00Z",
                        title: "Lunch",
                        description:
                            "Grilled salmon with quinoa and steamed vegetables.",
                        completed: true,
                    },
                },
            ],
            createdAt: "2025-02-10T14:30:00Z",
            updatedAt: "2025-02-15T09:00:00Z",
        },
    ];

    return (
        <>
            <Navbar />
            <div>
                <ul className="steps text-black">
                    <li data-content="?" className="step step-neutral">
                        Monday
                    </li>
                    <li data-content="!" className="step step-neutral">
                        Tuesday
                    </li>
                    <li data-content="✓" className="step step-neutral">
                        Wednesday
                    </li>
                    <li data-content="✕" className="step step-neutral">
                        Thurday
                    </li>
                    <li data-content="★" className="step step-neutral">
                        Friday
                    </li>
                    <li data-content="" className="step step-neutral">
                        Saturday
                    </li>
                    <li data-content="●" className="step step-neutral">
                        Sunday
                    </li>
                </ul>

                {todos.map((todo) => (
                    <div
                        key={todos._id}
                        className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                            {todo.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{todo.description}</p>
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                {todo.schedule[0].tasks.title}
                            </h3>{" "}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import Link from "next/link";
export default function Page() {
  const plans = [
    {
      _id: "65e4f98b2a5b5c001c7a9f35",
      userId: "65e3d27a4d2e11001b2a3c57",
      title: "7-Day Healthy Lifestyle Plan",
      description:
        "A structured plan to improve overall health with daily tasks for exercise, nutrition, and mental wellness.",
      day: "Monday",
      schedule: [
        {
          date: "2025-02-19T00:00:00.000Z",
          tasks: [
            {
              startTime: "12:00",
              endTime: "12:30",
              title: "Morning Stretching",
              description:
                "Perform 10 minutes of stretching to wake up your body and improve flexibility.",
              completed: false,
            },
            {
              startTime: "09:00",
              endTime: "09:30",
              title: "Healthy Breakfast",
              description:
                "Eat a healthy breakfast with oats, fruits, and nuts.",
              completed: false,
            },
            {
              startTime: "12:30",
              endTime: "13:00",
              title: "Healthy Lunch",
              description:
                "Eat a balanced meal with proteins, carbs, and vegetables.",
              completed: false,
            },
            {
              startTime: "15:00",
              endTime: "15:30",
              title: "Afternoon Walk",
              description:
                "Take a 30-minute walk outside to refresh your body and mind.",
              completed: false,
            },
            {
              startTime: "18:00",
              endTime: "18:30",
              title: "Strength Training",
              description:
                "Perform a 30-minute full-body workout to build strength.",
              completed: false,
            },
            {
              startTime: "20:00",
              endTime: "20:30",
              title: "Dinner",
              description:
                "Have a balanced dinner with vegetables, lean protein, and whole grains.",
              completed: false,
            },
            {
              startTime: "21:30",
              endTime: "22:00",
              title: "Evening Meditation",
              description:
                "Spend 10 minutes meditating to relax and prepare for sleep.",
              completed: false,
            },
          ],
        },
        {
          date: "2025-02-20T00:00:00.000Z",
          tasks: [
            {
              startTime: "07:00",
              endTime: "07:45",
              title: "Morning Jogging",
              description:
                "Jog for 30 minutes to improve cardiovascular health.",
              completed: false,
            },
            {
              startTime: "09:30",
              endTime: "10:00",
              title: "Healthy Snack",
              description:
                "Eat a healthy snack like almonds, yogurt, or fruits.",
              completed: false,
            },
            {
              startTime: "12:00",
              endTime: "12:30",
              title: "Lunch with Veggies",
              description: "Eat a balanced meal with plenty of vegetables.",
              completed: false,
            },
            {
              startTime: "15:30",
              endTime: "16:00",
              title: "Stretching Routine",
              description:
                "Do a quick 20-minute stretching session to relieve tension.",
              completed: false,
            },
            {
              startTime: "18:30",
              endTime: "19:00",
              title: "Yoga Session",
              description: "Relax your body with a 30-minute yoga session.",
              completed: false,
            },
            {
              startTime: "20:00",
              endTime: "20:30",
              title: "Dinner",
              description:
                "Have a light, low-carb dinner to promote digestion.",
              completed: false,
            },
            {
              startTime: "21:30",
              endTime: "22:00",
              title: "No Screen Time Before Bed",
              description:
                "Avoid phone and TV 30 minutes before sleeping to improve sleep quality.",
              completed: false,
            },
          ],
        },
        {
          date: "2025-02-21T00:00:00.000Z",
          tasks: [
            {
              startTime: "06:30",
              endTime: "07:00",
              title: "Drink 1L of Water",
              description:
                "Start your day with hydration by drinking at least 1L of water.",
              completed: false,
            },
            {
              startTime: "09:00",
              endTime: "09:30",
              title: "Healthy Breakfast",
              description:
                "Have a balanced breakfast with protein, fiber, and healthy fats.",
              completed: false,
            },
            {
              startTime: "12:00",
              endTime: "12:30",
              title: "Lunch with Protein",
              description:
                "Include lean protein in your lunch (chicken, tofu, fish).",
              completed: false,
            },
            {
              startTime: "15:00",
              endTime: "15:30",
              title: "Afternoon Meditation",
              description:
                "Take a 10-minute meditation break for mental clarity.",
              completed: false,
            },
            {
              startTime: "18:00",
              endTime: "18:45",
              title: "Strength Training",
              description:
                "45-minute strength training focusing on full-body compound movements.",
              completed: false,
            },
            {
              startTime: "20:00",
              endTime: "20:30",
              title: "Dinner",
              description:
                "Have a meal with vegetables, lean protein, and healthy fats.",
              completed: false,
            },
            {
              startTime: "22:00",
              endTime: "22:30",
              title: "Evening Stretching",
              description: "Perform 10 minutes of light stretching before bed.",
              completed: false,
            },
          ],
        },
      ],
    },
    {
      _id: "65e5b10c3f7b4a002d9f4c21",
      userId: "65e3d27a4d2e11001b2a3c57",
      title: "Better Sleep and Stress-Free Living",
      description:
        "A daily routine to reduce stress, improve sleep quality, and boost relaxation.",
      day: "Sunday",
      schedule: [
        {
          tasks: [
            {
              startTime: "06:30",
              endTime: "06:45",
              title: "Deep Breathing Exercise",
              description:
                "Perform 5 minutes of deep breathing to reduce morning stress.",
              completed: false,
            },
            {
              startTime: "09:00",
              endTime: "09:15",
              title: "Morning Walk",
              description: "Take a 15-minute walk outside to clear your mind.",
              completed: false,
            },
            {
              startTime: "12:30",
              endTime: "13:00",
              title: "Lunch with Greens",
              description: "Have a lunch with leafy greens and healthy fats.",
              completed: false,
            },
            {
              startTime: "15:00",
              endTime: "15:30",
              title: "Mindful Meditation",
              description:
                "Practice 10 minutes of mindful meditation to calm your mind.",
              completed: false,
            },
            {
              startTime: "18:00",
              endTime: "18:30",
              title: "Stretching Routine",
              description:
                "Do 20 minutes of gentle stretches to reduce stress.",
              completed: false,
            },
            {
              startTime: "20:00",
              endTime: "20:30",
              title: "Light Dinner",
              description:
                "Eat a light dinner to avoid heavy digestion before bed.",
              completed: false,
            },
            {
              startTime: "21:00",
              endTime: "21:30",
              title: "Sleep Routine",
              description:
                "Create a calm environment before sleep (dim lights, no screens).",
              completed: false,
            },
          ],
        },
        {
          tasks: [
            {
              startTime: "07:00",
              endTime: "07:30",
              title: "Gratitude Journal",
              description:
                "Write down 3 things you're grateful for to start the day positively.",
              completed: false,
            },
            {
              startTime: "09:00",
              endTime: "09:15",
              title: "Morning Walk",
              description: "Take a 15-minute walk to prepare for the day.",
              completed: false,
            },
            {
              startTime: "12:00",
              endTime: "12:30",
              title: "Lunch with Veggies",
              description:
                "Include a variety of vegetables in your lunch for better digestion.",
              completed: false,
            },
            {
              startTime: "15:30",
              endTime: "16:00",
              title: "Breathing Exercises",
              description:
                "Perform 5 minutes of deep breathing exercises to reduce stress.",
              completed: false,
            },
            {
              startTime: "18:00",
              endTime: "18:30",
              title: "Stretching Routine",
              description:
                "Stretch to release tension in the body after a long day.",
              completed: false,
            },
            {
              startTime: "20:00",
              endTime: "20:30",
              title: "Dinner with Protein",
              description: "Have a light dinner with protein and vegetables.",
              completed: false,
            },
            {
              startTime: "21:30",
              endTime: "22:00",
              title: "Evening Tea",
              description: "Drink chamomile tea to relax before bed.",
              completed: false,
            },
          ],
        },
        {
          date: "2025-02-21T00:00:00.000Z",
          tasks: [
            {
              startTime: "06:45",
              endTime: "07:00",
              title: "Stretching Routine",
              description:
                "A 15-minute full-body stretch to wake up the body and relieve tension.",
              completed: false,
            },
            {
              startTime: "09:00",
              endTime: "09:30",
              title: "Hydration Check",
              description:
                "Drink a glass of water to rehydrate after waking up.",
              completed: false,
            },
            {
              startTime: "12:00",
              endTime: "12:30",
              title: "Healthy Lunch",
              description:
                "Consume a nutritious lunch with vegetables and protein.",
              completed: false,
            },
            {
              startTime: "15:30",
              endTime: "16:00",
              title: "Mindful Meditation",
              description:
                "Relax with a 15-minute meditation to clear your mind.",
              completed: false,
            },
            {
              startTime: "18:00",
              endTime: "18:30",
              title: "Evening Yoga",
              description:
                "Do a short yoga session to stretch the muscles and unwind.",
              completed: false,
            },
            {
              startTime: "20:00",
              endTime: "20:30",
              title: "Dinner with Fiber",
              description: "Eat a fiber-rich dinner to promote digestion.",
              completed: false,
            },
            {
              startTime: "22:00",
              endTime: "22:30",
              title: "Sleep Routine",
              description:
                "Ensure a peaceful sleep by creating a calming environment.",
              completed: false,
            },
          ],
        },
      ],
    },
    // Additional plans here...
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  function getPlanForDay(dayName) {
    const foundPlan = plans.find((p) => p.day === dayName);

    setSelectedPlan(foundPlan || null);
  }
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      <Navbar />
      <Pagination days={daysOfWeek} getplanday={getPlanForDay} />
      <div className="flex gap-4 justify-center items-center my-4">
        <Link
          href="/add-plan"
          className="btn  bg-white text-blue-500 border border-blue-500 w-[10rem] hover:bg-blue-700 hover:text-white"
        >
          Add planning
        </Link>
        <button className="btn bg-white text-blue-500 border border-blue-500 w-[10rem] hover:bg-blue-700 hover:text-white">
          update planning
        </button>
        <button className="btn bg-white text-blue-500 border border-blue-500 w-[10rem] hover:bg-blue-700 hover:text-white">
          delete planning
        </button>
      </div>
      <div className="card mx-[10rem] shadow-xl p-[2rem] bg-white">
        {selectedPlan ? (
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="card-title text-blue-700 font-bold text-3xl ">
                {selectedPlan.title}
              </h2>
              <p className="card-text text-gray-800 py-2">
                {selectedPlan.description}
              </p>
            </div>
            <div className="flex w-full flex-col my-4">
              {(selectedPlan?.schedule || [])[0]?.tasks.map((task, i) => {
                console.log({ task });
                return (
                  <div
                    key={"task" + i}
                    className="card flex-row justify-between bg-white shadow-xl p-4 border border-blue-500  -box mb-4"
                    onClick={() => {
                      document.getElementById(`my_modal_${i}`).showModal();
                    }}
                  >
                    <div>
                      <h3 className="text-black font-bold ">{task.title}</h3>
                      <div className="text-gray-500 flex gap-3">
                        <p> Start Time: {task.startTime}</p>
                        <p>End Time: {task.endTime}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 ">
                      <button className="btn bg-blue-500 border-0 w-[5rem] hover:bg-blue-700 text-white">
                        Edit
                      </button>
                      <button className="btn bg-blue-500 border-0 w-[5rem] hover:bg-blue-700 text-white">
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="text-base-700 ">No plan found for the selected day.</p>
        )}
      </div>

      {/* Modal Dialogs */}
      {(selectedPlan?.schedule || [])[0]?.tasks.map((task, i) => (
        <dialog
          id={`my_modal_${i}`}
          key={`modal_${i}`}
          className="modal"
          onClick={(e) => e.stopPropagation()} // Prevent the dialog from closing when clicked inside
        >
          <div className="modal-box  bg-white border border-blue-700 ">
            <h3 className="font-bold text-lg text-blue-700">{task.title}</h3>
            <p className="py-4 text-gray-800">{task.description}</p>
            <div className="text-gray-500 flex gap-3">
              <p> Start Time: {task.startTime}</p>
              <p>End Time: {task.endTime}</p>
            </div>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => document.getElementById(`my_modal_${i}`).close()}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      ))}
      <Footer />
    </>
  );
}

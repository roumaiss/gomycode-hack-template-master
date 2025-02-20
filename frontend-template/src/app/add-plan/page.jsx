"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function PlanningForm() {
  const [formData, setFormData] = useState({
    userId: "",
    profissionalId: "",
    title: "",
    description: "",
    scheduleDate: "",
    taskTitle: "",
    startTime: "",
    endTime: "",
    taskDescription: "",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend
    try {
      const response = await fetch("/submit-planning", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Planning created successfully!");
      } else {
        alert("Error creating planning");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white my-[5rem] p-6 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Create a New Planning
        </h2>

        {/* Plan Information */}
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Plan Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Plan Description (optional):
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Schedule Information */}
        <h3 className="text-xl font-semibold text-gray-800">Schedule</h3>

        <div className="space-y-2">
          <label
            htmlFor="scheduleDate"
            className="block text-lg font-medium text-gray-700"
          >
            Date:
          </label>
          <input
            type="date"
            id="scheduleDate"
            name="scheduleDate"
            value={formData.scheduleDate}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="taskTitle"
            className="block text-lg font-medium text-gray-700"
          >
            Task Title:
          </label>
          <input
            type="text"
            id="taskTitle"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="startTime"
            className="block text-lg font-medium text-gray-700"
          >
            Start Time:
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="endTime"
            className="block text-lg font-medium text-gray-700"
          >
            End Time:
          </label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="taskDescription"
            className="block text-lg font-medium text-gray-700"
          >
            Task Description (optional):
          </label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            value={formData.taskDescription}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div className=" flex justify-between">
          <button
            type="submit"
            className="btn bg-blue-700 mx-auto border-0 text-white p-6 w-[10rem]"
          >
            add more tasks 
          </button>
          <button
            type="submit"
            className="btn bg-blue-700 mx-auto border-0 text-white p-6 w-[10rem]"
          >
            Create Planning
          </button>
        </div>
      </form>
    </>
  );
}

export default PlanningForm;

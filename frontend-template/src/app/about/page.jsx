'use client'
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";


export default function WhatWeOffer() {
  return (
    <>
      <div className="h-full">
        <Navbar />
      </div>

      <div className="text-center py-10 max-w-screen-xl mx-auto">
        <h1 className="text-5xl text-black font-bold mb-6">What We Offer</h1>

        <p className="text-lg text-gray-700 mb-6">
          At [Your Website Name], we offer a variety of programs designed to help you reach your fitness and nutrition goals. 
          Whether you're just starting out or are looking to take your routine to the next level, we have the perfect package for you.
        </p>

        {/* Package Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Package 1 - Fitness Starter */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
            
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Fitness Starter Package</h3>
            <p className="text-gray-700 mb-4">
              Get started on your fitness journey with our beginner-friendly program designed to build strength, endurance, and confidence.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Personalized workout plans</li>
              <li>Weekly progress tracking</li>
              <li>Basic nutritional advice</li>
            </ul>
            <Link className="text-blue-600 hover:underline" href="/fitness-starter">
            Learn More
            </Link>
          </div>

          {/* Package 2 - Nutrition Essentials */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
        
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Nutrition Essentials</h3>
            <p className="text-gray-700 mb-4">
              Discover balanced meal plans and recipes to fuel your body and maximize your performance.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Meal prep guidance</li>
              <li>Recipe suggestions for fitness</li>
              <li>Macronutrient breakdown</li>
            </ul>
            <Link className="text-blue-600 hover:underline" href="/nutrition-essentials">
              Learn More
            </Link>
          </div>

          {/* Package 3 - Wellness & Recovery */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
             
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Wellness & Recovery</h3>
            <p className="text-gray-700 mb-4">
              Focus on recovery and maintaining a healthy balance to improve overall well-being.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Stretching routines</li>
              <li>Meditation & mindfulness</li>
              <li>Rest & recovery strategies</li>
            </ul>
            <Link className="text-blue-600 hover:underline" href="/wellness-recovery">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

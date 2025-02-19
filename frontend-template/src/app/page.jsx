'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useSelector } from "react-redux";
// import SubscribeModal from "./components/SubscribeModal"; // Assuming you have a modal component

export default function Home() {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.user); // Use isLoggedIn instead of isAuthenticated
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal visibility

  const openModal = () => {
    if (isLoggedIn) {
      // If user is logged in, redirect to the Subscribe page
      router.push("/subscribe");
    } else {
      // If user is not logged in, redirect to the Login page
      router.push("/login");
    }
  };

  const closeModal = () => setIsModalOpen(false);

  // List of recipes
  const recipes = [
    {
      id: 1,
      title: "Healthy Smoothie",
      description:
        "A delicious and nutritious smoothie with fresh fruits, greens, and a boost of protein.",
      image: "/smoothie.jpg",
    },
    {
      id: 2,
      title: "Quinoa Salad",
      description:
        "A healthy, protein-packed salad with quinoa, vegetables, and a tangy dressing.",
      image: "/salad.jpg",
    },
    {
      id: 3,
      title: "Quinoa Salad",
      description:
        "A healthy, protein-packed salad with quinoa, vegetables, and a tangy dressing.",
      image: "/salad.jpg",
    },
  ];

  return (
    <>
      <div className="h-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto bg-blue-50 border-b border-blue-500">
        {/* Text on the left */}
        <div className="w-1/2 mb-20">
          <h1 className="text-5xl text-blue-700 font-bold mb-4">
            Build Healthy Habits, One Step at a Time
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Transform your life with small, consistent changes. Whether it's
            fitness, nutrition, or mindfulness, we're here to guide you on your
            journey to a healthier, happier you.
          </p>
          <Link
            href=""
            className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Start Your Journey
          </Link>
        </div>

        <div className="w-[600px]">
          <img src="/health-page.png" alt="Hero Image" className="rounded-lg" />
        </div>
      </div>

      {/* Grid Section for Recipes */}
      <div className="max-w-screen-xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-5">
          Popular Recipes
        </h2>

        <div className="grid grid-cols-3 gap-5">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-96 object-cover bg-center rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {recipe.title}
              </h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <Link
                href=""
                className="text-white bg-blue-500 py-2.5 px-4 rounded-lg font-semibold "
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Our Coaches Section */}
      <div className="bg-blue-50 py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-5xl font-bold text-blue-700 mb-5">
              Need Guidance?
            </h2>
            <h2 className="text-2xl font-bold text-blue-700 mb-5">
              Contact Our Professional Advisor
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our certified advisors are here to help you achieve your health and
              fitness goals. Reach out to us today!
            </p>
            <button
              onClick={openModal}
              className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* If modal is open, display it
      {isModalOpen && (
        <SubscribeModal isOpen={isModalOpen} onClose={closeModal} 
        
        />
      )} */}

      <Footer />
    </>
  );
}

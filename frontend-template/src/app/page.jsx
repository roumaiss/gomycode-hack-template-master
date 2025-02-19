'use client'
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useSelector } from "react-redux";
// Subscribe Modal Component
function SubscribeModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Subscription form submitted!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Subscribe Now</h2>
        <form onSubmit={handleSubmit}>
          {/* Payment Method Field */}
          <div className="mb-6">
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 font-semibold mb-2"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg  focus:border-blue-500"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>

          {/* Postal Code Field */}
          <div className="mb-6">
            <label
              htmlFor="postalCode"
              className="block text-gray-700 font-semibold mb-2"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Enter your postal code"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Form Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  const openModal = () => {
    if (isAuthenticated) {
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
                href=''
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

      {/* Subscribe Modal */}
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />

      <Footer />
    </>
  );
}
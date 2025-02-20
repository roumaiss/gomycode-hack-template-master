import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "../components/Footer";

export default function AlimentationProgram() {
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
      title: "Avocado Toast",
      description:
        "A simple yet healthy meal with mashed avocado on whole-grain toast.",
      image: "/avocado-toast.jpg",
    },
    {
      id: 4,
      title: "Grilled Chicken Salad",
      description:
        "A protein-packed salad with grilled chicken, greens, and a light dressing.",
      image: "/grilled-chicken-salad.jpg",
    },
    {
      id: 5,
      title: "Vegan Buddha Bowl",
      description:
        "A nourishing bowl with quinoa, roasted veggies, hummus, and avocado.",
      image: "/vegan-buddha-bowl.jpg",
    },
    {
      id: 6,
      title: "Greek Yogurt Parfait",
      description:
        "A refreshing parfait made with Greek yogurt, granola, and fresh berries.",
      image: "/yogurt-parfait.jpg",
    },
    {
      id: 7,
      title: "Veggie Stir-Fry",
      description:
        "A colorful stir-fry with mixed vegetables and a savory soy sauce.",
      image: "/veggie-stir-fry.jpg",
    },
    {
      id: 8,
      title: "Chia Pudding",
      description:
        "A creamy and healthy chia pudding made with coconut milk and topped with berries.",
      image: "/chia-pudding.jpg",
    },
  ];

  return (
   <>
    <div>
      {/* Recipe Grid */}
      <Navbar/>
      <div className="grid grid-cols-4 gap-6 p-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="text-gray-500">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Inspiration Section */}
      <section className="bg-gray-100 p-12 mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Find Your Inspiration</h2>
        <p className="text-lg text-center text-gray-700">
          Whether you're looking to fuel your workout or enjoy a healthy meal at home, our recipes
          are designed to keep you energized and motivated. Explore new dishes that nourish your
          body and spark creativity in the kitchen.
        </p>
      </section>

      {/* Additional Section */}
      <section className="p-12 mt-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Transform Your Health</h2>
        <p className="text-lg text-center text-gray-700">
          Our program is designed to help you make long-lasting lifestyle changes. Start with one
          small change today and watch your habits evolve. Whether it's meal prep or fitness, we
          provide the guidance and tools you need to stay on track.
        </p>
      </section>
    </div>
    <Footer/>
   
   </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Gyms() {
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
            Crush Your Fitness Goals, One Rep at a Time
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Unlock your full potential with a fitness routine that works for
            you. From strength training to endurance and recovery, we'll help
            you stay motivated and consistent as you build a stronger, healthier
            version of yourself. Let’s make every workout count!
          </p>
          <Link
            href=""
            className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Start Your Journey
          </Link>
        </div>

        <div className="w-[600px]">
          <img src="/Gym-bro.png" alt="Hero Image" className="rounded-lg" />
        </div>
      </div>
      <Footer />
    </>
  );
}

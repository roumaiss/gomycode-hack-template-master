import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Gyms() {
    const coaches = [
        {
            id: 1,
            title: "M'Hamed Didouche",
            description:
                "M'Hamed specializes in strength training and endurance coaching, helping clients build muscle, improve mobility, and stay motivated. His personalized workout plans make fitness both effective and sustainable.",
            image: "/gym-coach1.webp",
        },
        {
            id: 2,
            title: "Khalil Cherif",
            description:
                "Khalil blends mindfulness, stress management, and healthy habits to create a balanced lifestyle. She helps clients improve their mental clarity, sleep, and overall well-being through holistic coaching.",
            image: "/gym-coach2.webp",
        },
        {
            id: 3,
            title: "Yassine Tadjin",
            description:
                "With a focus on fat loss, energy optimization, and athletic performance, Yassine designs programs that help clients lose weight, boost stamina, and stay disciplined in their fitness journey.",
            image: "/gym-coach3.webp",
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
                <div className="w-[600px]">
                    <img
                        src="/Gym-bro.png"
                        alt="Hero Image"
                        className="rounded-lg"
                    />
                </div>
                <div className="w-1/2 mb-20">
                    <h1 className="text-5xl text-blue-700 font-bold mb-4">
                        Crush Your Fitness Goals, One Rep at a Time
                    </h1>
                    <p className="text-lg text-gray-500 mb-8">
                        Unlock your full potential with a fitness routine that
                        works for you. From strength training to endurance and
                        recovery, we'll help you stay motivated and consistent
                        as you build a stronger, healthier version of yourself.
                        Let’s make every workout count!
                    </p>
                    <Link
                        href=""
                        className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Start Your Journey
                    </Link>
                </div>
            </div>

            {/* ////////////////// */}
            <div className="px-16 py-8">
                <h2 className="text-5xl font-bold text-center text-blue-700 mb-5 p-2">
                    Meet our professional coaches
                </h2>
                <div className="grid grid-cols-3 gap-5 ">
                    {coaches.map((coach) => (
                        <div
                            key={coach.id}
                            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                        >
                            <img
                                src={coach.image}
                                alt={coach.title}
                                className="w-full  object-fill bg-center rounded-t-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                {coach.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {coach.description}
                            </p>
                            <Link
                                href=""
                                className="text-white bg-blue-500 py-2.5 px-4 rounded-lg font-semibold "
                            >
                                View coach
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

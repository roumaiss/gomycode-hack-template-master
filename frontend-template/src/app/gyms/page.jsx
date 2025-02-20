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

    const gyms = [
        {
            id: 1,
            title: "Black Gym",
            address: "40 Rue du Chenoua, Hydra",
            image: "/gym1.jpg",
            location:
                "https://www.google.com/maps/place/Black+GYM/@36.7428916,3.0368624,17z/data=!3m1!4b1!4m6!3m5!1s0x128fad8617ff30c1:0x2e0f47c7cd84c66a!8m2!3d36.7428916!4d3.0394373!16s%2Fg%2F11twlppctf?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
        },
        {
            id: 2,
            title: "The Hangar Gym",
            address: "P2M9+4F4, Hydra",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location:
                "https://www.google.https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/maps/place/The+Hangar+Gym/@36.7327733,3.0161374,17z/data=!3m1!4b1!4m6!3m5!1s0x128fadfd530c6869:0x40cb211fb51d983d!8m2!3d36.7327733!4d3.0187123!16s%2Fg%2F11d_9fbqhv?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
        },
        {
            id: 3,
            title: "Home Fit",
            address: "19 Rue de Cirta, Hydra 16000",
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
            location:
                "https://www.google.com/maps/place/Home+Fit/@36.7470232,3.0408104,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb3b6d06fb06f:0xa5be09f1a99ca727!8m2!3d36.7470232!4d3.0433853!16s%2Fg%2F11p_5v6sw1?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
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
                                href={`gyms/${coach.id}`} // Dynamic link
                                className="text-white bg-blue-500 py-2.5 px-4 rounded-lg font-semibold"
                            >
                                View coach
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* ////////////////// */}

            <div className="px-16 py-8">
                <h2 className="text-5xl font-bold text-center text-blue-700 mb-5 p-2">
                    Our partners
                </h2>
                <div className="grid grid-cols-3 gap-5 ">
                    {gyms.map((gym) => (
                        <div
                            key={gym.id}
                            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                        >
                            <img
                                src={gym.image}
                                alt={gym.title}
                                className="w-full h-96  object-cover bg-center rounded-t-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                                {gym.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{gym.address}</p>
                            <a
                                target="_blank"
                                href={gym.location}
                                className="text-white bg-blue-500 py-2.5 px-4 rounded-lg font-semibold "
                            >
                                View on maps
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

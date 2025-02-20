import Footer from "@/app/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const coaches = [
    {
        id: 1,
        name: "M'Hamed Didouche",
        age: 34,
        description: [
            "M'Hamed is a certified strength coach with over 10 years of experience helping clients build muscle, improve endurance, and recover from injuries. He focuses on progressive training techniques, ensuring steady and sustainable growth in strength and performance. His coaching style is both motivational and disciplined, pushing clients to reach their full potential while prioritizing proper form and injury prevention.",
            "Whether you're an athlete or just starting your fitness journey, M'Hamed tailors his programs to fit individual needs. His sessions combine strength training, endurance workouts, and mobility exercises to create a balanced approach to fitness. He also offers virtual coaching, making it easier for clients to stay on track no matter where they are.",
        ],
        workplace: "Black Gym, Hydra",
        image: "/gym-coach1.webp",
        specialties: [
            "Strength Training",
            "Endurance Coaching",
            "Injury Prevention",
        ],
        certifications: [
            "NASM Certified Personal Trainer",
            "Certified Strength Coach",
        ],
    },
    {
        id: 2,
        name: "Khalil Cherif",
        age: 29,
        description: [
            "Khalil is a wellness coach specializing in yoga, stress management, and holistic health. She believes in a mind-body approach to fitness, helping clients improve flexibility, reduce stress, and develop lasting healthy habits. Her sessions blend guided meditation, breathing exercises, and personalized yoga flows to enhance both mental and physical well-being.",
            "Beyond movement, Khalil also advises on nutrition, sleep, and lifestyle adjustments to support overall wellness. She works with busy professionals, students, and those looking to improve their mental clarity and relaxation, offering both in-person and online coaching.",
        ],
        workplace: "The Hangar Gym, Hydra",
        image: "/gym-coach2.webp",
        specialties: [
            "Yoga & Flexibility",
            "Mindfulness & Stress Management",
            "Holistic Health",
        ],
        certifications: [
            "Certified Yoga Instructor",
            "Wellness & Mindfulness Coach",
        ],
    },
    {
        id: 3,
        name: "Yassine Tadjin",
        age: 37,
        description: [
            "Yassine specializes in weight loss, body transformation, and sports performance. With a results-driven approach, he helps clients burn fat, build muscle, and optimize their metabolism through a mix of strength training, high-intensity workouts, and tailored nutrition plans. His coaching style is structured and science-based, making fitness both effective and sustainable.",
            "He works with individuals at all fitness levels, from beginners to athletes, designing programs that enhance endurance, agility, and overall performance. Whether you're looking to shed extra weight or train for a competition, Yassine's expertise ensures you reach your goals with a clear and actionable plan.",
        ],
        workplace: "Home Fit, Hydra",
        image: "/gym-coach3.webp",
        specialties: [
            "Weight Loss",
            "Athletic Performance",
            "Functional Training",
        ],
        certifications: [
            "ACE Certified Personal Trainer",
            "Sports Nutrition Specialist",
        ],
    },
];
export default async function RecipeDetail({ params }) {
    const { id } = await params;
    // Fetch recipes from an API or use a static list
    console.log(id);
    const currentCoache = coaches[Number(id)];
    if (!currentCoache) return <>nothing</>;
    return (
        <>
            <Navbar />

            <div className="p-6 max-w-screen-xl flex justify-center items-center flex-col mx-auto ">
                <div className="flex flex-col justify-center items-center gap-4 border py-16 w-2/3">
                    <img
                        src={currentCoache.image}
                        className="w-96 h-96 object-cover mb-4 rounded-lg shadow-lg"
                    />

                    <div className="flex flex-col items-center  bg-blue-100 w-2/3 p-4 rounded-2xl">
                        <h1 className="text-3xl text-blue-700 font-bold mb-8">
                            {currentCoache.name}
                        </h1>
                        <div className="flex justify-between w-full ">
                            <ul className="list-disc list-inside flex flex-col gap-2 ">
                                <p className="text-gray-700 mb-2 font-bold text-2xl">
                                    Speciality :
                                </p>

                                {currentCoache.specialties.map(
                                    (speciality, index) => (
                                        <li
                                            key={index}
                                            className="text-gray-700 mb-2"
                                        >
                                            {speciality}
                                        </li>
                                    )
                                )}
                            </ul>
                            <ul className="list-disc list-inside flex flex-col gap-2  ">
                                <p className="text-gray-700 mb-2 font-bold text-2xl">
                                    Certifications :
                                </p>
                                {currentCoache.certifications.map(
                                    (certification, index) => (
                                        <li
                                            key={index}
                                            className="text-gray-700 mb-2"
                                        >
                                            {certification}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 p-4">
                    {/* Ingredients Section */}
                    <div className="flex flex-col gap-4 w-full max-w-2xl mb-6 bg-blue-100 p-4 rounded-2xl justify-center items-center text-start">
                        <h2 className="text-2xl text-blue-700 font-semibold mb-4">
                            About him
                        </h2>
                        <p className="text-gray-700 text-center mb-6 text-xl/7.5">
                            {currentCoache.description[0]}
                        </p>
                        <p className="text-gray-700 text-center mb-6 text-xl/7.5">
                            {currentCoache.description[1]}
                        </p>
                    </div>
                </div>
                {/* Back to Recipes Button */}
                {/*                 <Link
                    href="/alimentation-program"
                    className="text-white bg-blue-500 py-2.5 px-4 rounded-lg font-semibold mt-4 inline-block"
                >
                    Back to Recipes
                </Link>
 */}{" "}
                <button className="bg-blue-700 text-white px-7 py-2 rounded-lg text-lg font-bold hover:bg-blue-500 transition duration-300">
                    Get in touch
                </button>
            </div>
            <Footer />
        </>
    );
}

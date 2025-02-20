import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
    const professionals = [
        {
            name: "John Doe",
            img: "gym-coach3.webp",
            profession: "Nutritionist",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis beatae vero sed dolor, nulla esse!",
        },
        {
            name: "John Doe",
            img: "gym-coach3.webp",
            profession: "Coach",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis beatae vero sed dolor, nulla esse!",
        },
        {
            name: "John Doe",
            img: "gym-coach3.webp",
            profession: "Doctor",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis beatae vero sed dolor, nulla esse!",
        },
    ];
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center p-16 gap-6 ">
                <div>
                    <img src="/about-us.png" alt="" />
                </div>
                <div className="flex flex-col justify-around items-around h-[400px] text-blue-700">
                    <h1 className="text-5xl text-blue-700 font-bold">
                        About Us
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-blue-700 ">
                            Welcome to (Title), your go-to platform for healthy
                            living! We make wellness simple with nutritious
                            recipes, expert guidance, and personalized plans to
                            help you stay on track. Whether you're looking to
                            eat better, stay active, or connect with health
                            professionals, we’ve got you covered.
                        </p>
                        <Link
                            href="/login"
                            className="text-xl font-bold text-blue-700"
                        >
                            Click here to start your journey!
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-8 items-center">
                <h1 className="text-5xl text-blue-700 font-bold">Our team</h1>
                <div className="flex px-16 gap-4 justify-center items-center ">
                    {professionals.map((professional) => (
                        <div className=" card-body border bg-blue-100 rounded-2xl ">
                            <div className="flex flex-col justify-center items-center gap-4 text-center">
                                <div className="h-[150px] w-[150px] rounded-full overflow-hidden ">
                                    <img
                                        className="object-cover"
                                        src={professional.img}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-blue-700">
                                    {professional.name}
                                </h3>
                                <p className="text-3xl font-bold text-blue-700 ">
                                    {professional.profession}
                                </p>
                                <p className="text-lg text-blue-700">
                                    {professional.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

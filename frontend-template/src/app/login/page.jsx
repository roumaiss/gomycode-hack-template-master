"use client"
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "@/redux/slices/user";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const dispatch = useDispatch();  // Set up the dispatch function for Redux
    const router = useRouter();

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submit
    const submit = async (e) => {
        e.preventDefault();  // Prevent default form submission behavior

        const { email, password } = formData; // Get email and password from formData
        try {
            const response = await axios.post('http://localhost:6941/api/v1/auth/login', { email, password });
            const { user, token } = response.data;

            // Save the token in localStorage
            localStorage.setItem('token', token);

            // Dispatch the login action to store user info in Redux
            dispatch(setUser(user));  // Dispatch login action with user data from API

            // Redirect user to another page, like a dashboard or homepage
            router.push('/');  // Example redirect

        } catch (error) {
            setError(error.response ? error.response.data : "An error occurred");
            console.error('Login failed', error.response ? error.response.data : error);
        }
    };

    return (
        <>
            <Navbar />
            <section>
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
                    <div className="w-full h-[600px] place-self-center lg:col-span-6">
                        <div className="p-6 mx-auto bg-white rounded-lg shadow sm:max-w-xl sm:p-8">
                            <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight mt-10 text-black">
                                Welcome back
                            </h1>
                            {error && (
                                <p className="text-sm text-red-500">{error}</p>
                            )}
                            <p className="text-sm font-light text-gray-800">
                                Start your website in seconds. Don't have an account?{" "}
                                <Link
                                    href="/register"
                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Sign up
                                </Link>
                                .
                            </p>
                            <form className="mt-4 space-y-6 sm:mt-6" onSubmit={submit}>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-black"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email} // Bind value to state
                                            onChange={handleChange} // Handle input change
                                            className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter you email ..."
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-800"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={formData.password} // Bind value to state
                                            onChange={handleChange} // Handle input change
                                            className="border border-gray-300 text-black rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter your password ..."
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="px-5 text-center text-black dark:text-gray-400">
                                        or
                                    </div>
                                    <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                                </div>
                                <div className="space-y-10">
                                    <a
                                        href="#"
                                        className="w-full mt-5 inline-flex items-center justify-center py-2.5 transition duration-300 px-5 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200  hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 hover:bg-blue-700"
                                    >
                                        Sign in with Google
                                    </a>
                                    <a
                                        href="#"
                                        className="w-full inline-flex items-center justify-center mt-5 py-2.5 px-5 transition-all duration-300 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200  hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 hover:bg-blue-700"
                                    >
                                        Sign in with Apple
                                    </a>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-gray-800"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white mt-5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:col-span-6 lg:h-auto">
                        <img
                            src="/login.jpg"
                            alt="login image"
                            className="w-full h-[600px] rounded-lg object-cover object-center"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

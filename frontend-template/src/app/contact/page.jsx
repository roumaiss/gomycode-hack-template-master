"use client";
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
  const dispatch = useDispatch(); // Set up the dispatch function for Redux
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
    e.preventDefault(); // Prevent default form submission behavior

    const { email, password } = formData; // Get email and password from formData
    try {
      const response = await axios.post(
        "http://localhost:6941/api/v1/auth/login",
        { email, password }
      );
      const { user, token } = response.data;

      // Save the token in localStorage
      localStorage.setItem("token", token);

      // Dispatch the login action to store user info in Redux
      dispatch(setUser(user)); // Dispatch login action with user data from API

      // Redirect user to another page, like a dashboard or homepage
      router.push("/"); // Example redirect
    } catch (error) {
      setError(error.response ? error.response.data : "An error occurred");
      console.error(
        "Login failed",
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto my-[5rem] lg:py-16 lg:grid-cols-12">
          <div className="w-full h-[600px] place-self-center lg:col-span-6">
            <div className="p-6 mx-auto bg-white rounded-lg shadow sm:max-w-xl sm:p-8">
              <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight mt-10 text-black">
                Contact Us
              </h1>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <form className="mt-4 space-y-6 sm:mt-6 " onSubmit={submit}>
                <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      value={formData.name} // Bind value to state
                      onChange={handleChange} // Handle input change
                      className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter you name ..."
                      required
                    />
                  </div>
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
                </div>
                <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Subject
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.Subject} // Bind value to state
                      onChange={handleChange} // Handle input change
                      className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full h-32 p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your message..."
                    ></textarea>
                </div>
                <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message} // Bind value to state
                      onChange={handleChange} // Handle input change
                      className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full h-32 p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your message..."
                    ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white mt-5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Contact us 
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

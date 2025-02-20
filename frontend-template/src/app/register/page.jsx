"use client";

import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "@/redux/slices/user";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [modalData, setModalData] = useState({ height: "", weight: "", age: "", goal: "" });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility
  const dispatch = useDispatch();
  const router = useRouter();

  // Handle input change for registration form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle input change for modal form
  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submit for registration
  const submit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = formData;
    try {
      const response = await axios.post('http://localhost:6941/api/v1/auth/register', { firstName, lastName, email, password });

      const { user, token } = response.data;
      localStorage.setItem('token', token);

      // Dispatch the setUser action to store the new user in Redux state
      dispatch(setUser(user));

      // Show the modal after successful registration
      setShowModal(true);
    } catch (error) {
      setError(error.response ? error.response.data.error : "An error occurred");
      console.error('Registration failed:', error.response ? error.response.data : error);
    }
  };

  // Handle form submit for modal
  const submitModal = async (e) => {
    e.preventDefault();
    
    // You can handle modal data submission here, for now, we'll log it.
    console.log("Modal Data: ", modalData);

    // After modal submission, you can either save it or send it to your server
    // Close the modal
    setShowModal(false);

    // Redirect to login page after successful modal submission
    router.push('/login'); 
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto lg:py-16 lg:grid-cols-12">
          <div className="w-full h-full place-self-center lg:col-span-6">
            <div className="p-6 mx-auto bg-white rounded-lg shadow sm:max-w-xl sm:p-8">
              <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight mt-10 text-black">
                Create an account
              </h1>
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <p className="text-sm font-light text-gray-800">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign in
                </a>
                .
              </p>
              <form className="mt-4 space-y-6 sm:mt-6" onSubmit={submit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your first name ..."
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-gray-300 text-black rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your password ..."
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-800">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white mt-5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create an account
                </button>
              </form>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-6 lg:h-auto">
            <img
              src="/register.png"
              alt="register image"
              className="w-full h-[600px] rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Modal for Additional Information */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl text-blue-700 font-bold mb-4">Please provide your additional information</h2>
            <form onSubmit={submitModal}>
              <div className="mb-4">
                <label htmlFor="height" className="block text-sm font-medium text-black">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  value={modalData.height}
                  onChange={handleModalChange}
                  className="w-full text-black p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="weight" className="block text-sm font-medium text-black">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  value={modalData.weight}
                  onChange={handleModalChange}
                  className="w-full text-black p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block text-sm font-medium text-black">Age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={modalData.age}
                  onChange={handleModalChange}
                  className="w-full p-2 border text-black rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="goal" className="block text-sm font-medium text-black">Goal</label>
                <select
                  name="goal"
                  id="goal"
                  value={modalData.goal}
                  onChange={handleModalChange}
                  className="w-full p-2 border text-black rounded-md"
                  required
                >
                  <option value="weightLoss">Weight Loss</option>
                  <option value="muscleGain">Muscle Gain</option>
                  <option value="maintain">Maintain Weight</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 mb-3 hover:bg-blue-700 transition duration-300 rounded-md py-2"
              >
              Submit for Advices
              </button>
            </form>
            <button
              className="w-full text-white bg-gray-400 hover:bg-gray-500 transition duration-300 rounded-md py-2"
              onClick={() => setShowModal(false)}
            >
              Skip
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

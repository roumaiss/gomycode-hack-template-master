"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");


  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:6941/api/v1/contact",
        formData
      );

      if (response.status === 200) {
        setResponseMessage("Message has been sended successfully!");
        setFormData({ email: "", subject: "", message: "" });

        setTimeout(() => {
          setResponseMessage("");
        }, 3000);
      } else {
        setResponseMessage(`Erreur: ${response.data.message || "Try again."}`);
      }
    } catch (error) {
      setResponseMessage("An error has occured , try again");
      console.error("Error occurred:", error);
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
              {responseMessage && (
                <p className="text-sm text-green-500">{responseMessage}</p>
              )}
              <form className="mt-4 space-y-6 sm:mt-6" onSubmit={handleSubmit}>
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
                      value={formData.email}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email ..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your subject ..."
                      required
                    />
                  </div>
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
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full h-32 p-2.5 bg-blue-50 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white mt-5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send Message
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

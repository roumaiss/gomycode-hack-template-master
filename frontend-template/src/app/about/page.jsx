
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="h-full">
        <Navbar/>
      </div>

      <h1 className="text-5xl text-black">About page</h1>
      <Footer />
    </>
  );
}

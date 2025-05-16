import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Compare from "./components/Compare";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Compare />
                <Testimonial />
                <CTA />
            </main>
        </div>
    );
}

export default App;

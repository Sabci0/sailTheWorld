import React from "react";
import Header from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";

function App() {
    return (
        <div>
            <Navbar />

            <main>
                <HomeSection />
                <AboutSection />
                <TeamSection />
            </main>

            <Footer />
        </div>
    );
}

export default App;

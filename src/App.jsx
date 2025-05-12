import React from "react";
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    // 👇 This wrapper controls site-wide light/dark background + text
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <div id="howitworks"><HowItWorks /></div>
        <div id="whyus"><WhyChooseUs /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><ContactForm /></div>
        <ChatWidget />
      </main>
      <Footer />
    </div>
  );
}

export default App;

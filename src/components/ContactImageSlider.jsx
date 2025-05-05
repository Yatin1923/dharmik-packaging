
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ContactImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Customer Support Excellence",
      description: "24/7 dedicated support for all your packaging needs",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"
    },
    {
      title: "Global Reach",
      description: "Serving clients worldwide with premium packaging solutions",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
    },
    {
      title: "Sustainable Partnership",
      description: "Building long-term relationships through quality service",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-t-2xl">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary" />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">{slides[currentIndex].title}</h3>
              <p className="text-sm font-light">{slides[currentIndex].description}</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactImageSlider;

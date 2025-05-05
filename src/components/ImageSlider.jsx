
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "State-of-the-Art Manufacturing",
      description: "Advanced machinery ensuring precision and quality",
      image: "https://images.unsplash.com/photo-1495716098472-4bd5c0382520"
    },
    {
      title: "Premium Mono Cartons",
      description: "Elegant retail packaging solutions with superior finish",
      image: "https://images.unsplash.com/photo-1581367925716-a5a12f66373d"
    },
    {
      title: "Food & Beverage Packaging",
      description: "FDA-compliant packaging for food industry",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
      title: "Industrial Packaging",
      description: "Heavy-duty corrugated solutions for safe transit",
      image: "https://images.unsplash.com/photo-1530049478161-0780526964f4"
    },
    {
      title: "Quality Control Process",
      description: "Rigorous testing ensuring consistent quality",
      image: "https://images.unsplash.com/photo-1551884171-004163219904"
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              handleNext();
            } else if (swipe > swipeConfidenceThreshold) {
              handlePrevious();
            }
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <div className="relative w-full h-full">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-3">{slides[currentIndex].title}</h3>
              <p className="text-xl font-light">{slides[currentIndex].description}</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

export default ImageSlider;


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package2, Award, Leaf } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
       {/* Add video background */}
       <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[60%] blur-[2px]"
        >
          <source src="public/assets/Hero Bg.mp4" type="video/mp4" />
        </video>
        {/* Add overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <motion.div 
        className="container mx-auto px-6 py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Beyond Packaging,<br/>
              <span className="text-primary">Into Brilliance</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              ISO 9001:2015 certified packaging solutions with over 25 years of excellence in innovation and sustainability
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="text-lg px-8 py-6">
                Explore Our Solutions
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div 
              className="flex gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center">
                <Package2 className="h-8 w-8 text-primary mr-2" />
                <div>
                  <p className="font-semibold text-white">200+ Tons</p>
                  <p className="text-sm text-white">Monthly Capacity</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="h-8 w-8 text-primary mr-2" />
                <div>
                  <p className="font-semibold text-white">ISO 9001:2015</p>
                  <p className="text-sm text-white">Certified</p>
                </div>
              </div>
              <div className="flex items-center">
                <Leaf className="h-8 w-8 text-primary mr-2" />
                <div>
                  <p className="font-semibold text-white">Eco-Friendly</p>
                  <p className="text-sm text-white">Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              <img 
                className="rounded-2xl shadow-2xl"
                alt="Premium packaging showcase"
               src="https://images.unsplash.com/photo-1591098551421-864da732e63a" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <img 
                  className="w-24 h-24 object-cover rounded-lg"
                  alt="Quality certification"
                 src="https://images.unsplash.com/photo-1684248643903-679f6311c9d5" />
              </div>
            </div>
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

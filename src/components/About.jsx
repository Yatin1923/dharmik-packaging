
import React from "react";
import { motion } from "framer-motion";
import { Package2, Leaf, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-5xl mx-auto">
          Dharmik Packaging Industries, based in Savli, Vadodara, is a trusted name in packaging with over 25 years of experience. We specialize in manufacturing multi-color mono cartons, litho laminated cartons, corrugated boxes, and custom die-cut boxes, delivering high-quality solutions across diverse industries. Backed by ISO 9001:2015 certification and a state-of-the-art production unit, we ensure precision, consistency, and timely delivery in every project. Our commitment to quality, innovation, and customer satisfaction drives us to go beyond packaging—into brilliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Package2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">World Class Quality</h3>
            <p className="text-gray-600">We meet worlwide quality requirements with innovative technology and meticulous craftmenship</p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Leaf className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">On Time Delivery</h3>
            <p className="text-gray-600">On Time Delivery our simlpified methods ensure that we deliver on time while maintaining high quality</p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Services</h3>
            <p className="text-gray-600">We work closely with clients to customize solutions that meet their specific needs and interests</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
            <p className="text-gray-600">We provide afforable printing and packaging solutions, making high-quality available to everyone</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

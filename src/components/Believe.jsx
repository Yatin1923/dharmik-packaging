
import React from "react";
import { motion } from "framer-motion";
import { Package2, Leaf, Award } from "lucide-react";

const Believe = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">They Beleive in us</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Package2 className="h-12 w-12 text-primary mx-auto mb-4" />
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Package2 className="h-12 w-12 text-primary mx-auto mb-4" />
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Package2 className="h-12 w-12 text-primary mx-auto mb-4" />
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Package2 className="h-12 w-12 text-primary mx-auto mb-4" />
          </motion.div>

         
        </div>
      </div>
    </section>
  );
};

export default Believe;

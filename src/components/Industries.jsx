
import React from "react";
import { motion } from "framer-motion";
import { FlaskRound as Flask, ShoppingBag, Cog, Truck, Package2, Leaf } from 'lucide-react';

const Industries = () => {
  const industries = [
    { name: "Pharmaceuticals", icon: Flask, description: "Specialized packaging for medical products" },
    { name: "FMCG", icon: ShoppingBag, description: "Attractive and durable packaging solutions" },
    { name: "Engineering", icon: Cog, description: "Robust packaging for industrial components" },
    { name: "Agrochemicals", icon: Leaf, description: "Safe and secure chemical packaging" },
    { name: "E-commerce", icon: Truck, description: "Shipping-friendly packaging solutions" },
    { name: "Retail", icon: Package2, description: "Eye-catching retail packaging designs" }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering specialized packaging solutions across diverse industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <industry.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

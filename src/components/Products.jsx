
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package, Box, PackageOpen, ScrollText } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

const Products = () => {
  const products = [
    {
      name: "Mono Cartons",
      description: "Premium quality mono cartons for retail and display packaging",
      icon: Package,
      features: ["Custom sizes", "High-quality printing", "Eco-friendly materials"],
      image: "public/assests/Mono Cartons.jpeg"
    },
    {
      name: "Litho Laminated Cartons",
      description: "Durable laminated cartons with superior print quality",
      icon: Box,
      features: ["Premium finish", "Enhanced durability", "Brand enhancement"],
      image: "public/assests/Litho Laminated Cartons.jpeg"
    },
    {
      name: "Corrugated Boxes",
      description: "Strong and reliable corrugated packaging solutions",
      icon: PackageOpen,
      features: ["Custom strength", "Various flute profiles", "Stackable design"],
      image: "public/assests/Corrogated Boxes.jpeg"
    },
    {
      name: "Rolls & Sheets",
      description: "High-quality packaging materials in roll and sheet form",
      icon: ScrollText,
      features: ["Flexible sizes", "Multiple materials", "Cost-effective"],
      image: "https://images.unsplash.com/photo-1551884171-004163219904"
    }
  ];

  return (
    <section id="products" className="py-20 section-pattern">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive packaging solutions tailored to your specific needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <ImageSlider />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <product.icon className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

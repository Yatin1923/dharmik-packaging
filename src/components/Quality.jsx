
import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, BarChart3, Factory } from "lucide-react";

const Quality = () => {
  const features = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "Internationally recognized quality management system"
    },
    {
      icon: CheckCircle2,
      title: "Quality Testing",
      description: "Advanced equipment including Burst Strength Tester, GSM Tester, and Moisture Meter"
    },
    {
      icon: BarChart3,
      title: "Production Capacity",
      description: "200+ tons monthly production capacity with state-of-the-art machinery"
    },
    {
      icon: Factory,
      title: "Modern Infrastructure",
      description: "Cutting-edge facilities ensuring consistent quality"
    }
  ];

  return (
    <section id="quality" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold">Quality Assurance</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Certified for Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality is reflected in our rigorous testing practices and state-of-the-art infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-start p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <feature.icon className="h-12 w-12 text-primary flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
           <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[80vh] object-cover"
        >
          <source src="public/assets/ContactUs.mp4" type="video/mp4" />
        </video>
          {/* <img  alt="Quality control process" className="rounded-lg shadow-xl mx-auto" src="https://images.unsplash.com/photo-1551884171-004163219904" /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Quality;


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";
import ContactImageSlider from "@/components/ContactImageSlider";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto">
            Ready to discuss your packaging needs? Our team is here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ContactImageSlider />
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6" />
                <a href="mailto:dharmikraniya@gmail.com" className="hover:text-gray-200 transition-colors">
                  dharmikraniya@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="h-6 w-6" />
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Connect on LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6" />
                <span>Our Location</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:ring-2 focus:ring-primary text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:ring-2 focus:ring-primary text-gray-900"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:ring-2 focus:ring-primary text-gray-900"
                ></textarea>
              </div>
              <Button variant="secondary" size="lg" className="w-full">
                <Phone className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

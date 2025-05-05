
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:dharmikraniya@gmail.com" 
              className="flex items-center space-x-2 text-sm hover:text-white/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>dharmikraniya@gmail.com</span>
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center space-x-2 text-sm hover:text-white/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+1234567890</span>
            </a>
          </div>
          {/* <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Your Company Address Here</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;

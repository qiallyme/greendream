import React from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import {
  PHONE_URL,
  EMAIL_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  BUSINESS_NAME,
  OWNER_NAME,
  CURRENT_YEAR,
} from "../constants/index";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{BUSINESS_NAME}</h3>
            <p className="text-green-100">
              Professional landscaping services by {OWNER_NAME}. 
              Transforming outdoor spaces with dedication and expertise.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-green-100">
              <p>📞 Call for Free Estimate</p>
              <p>📧 luis.palacios12@icloud.com</p>
              <p>📍 Serving the Greater Area</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <p className="text-green-100">
            © {CURRENT_YEAR} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

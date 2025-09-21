import React from "react";
import { useSpring, animated } from "react-spring";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { PHONE_URL, EMAIL_URL } from "../constants";

export default function ContactMe() {
  const contactSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  return (
    <animated.section
      id="contact-me"
      className="container mx-auto bg-lightDesert min-h-screen py-20"
      style={contactSpring}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-darkDesert mb-4">Contact Us</h1>
        <p className="text-xl text-goldDesert max-w-3xl mx-auto">
          Ready to transform your outdoor space? Get in touch with us today for a free consultation and estimate!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-darkDesert mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaPhone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-darkDesert">Phone</h3>
                  <a href={PHONE_URL} className="text-goldDesert hover:text-green-600 transition-colors">
                    (463) 320-2025
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-darkDesert">Email</h3>
                  <a href={EMAIL_URL} className="text-goldDesert hover:text-green-600 transition-colors">
                    luis.palacios12@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-darkDesert">Service Area</h3>
                  <p className="text-darkDesert">Greater Area & Surrounding Communities</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaClock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-darkDesert">Business Hours</h3>
                  <p className="text-darkDesert">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-darkDesert">Saturday: 8:00 AM - 4:00 PM</p>
                  <p className="text-darkDesert">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-8">
          <div className="bg-green-600 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Free Estimate</h2>
            <p className="mb-6">
              Ready to get started? Contact us today for a free, no-obligation estimate. 
              We'll assess your property and provide you with a detailed quote for your landscaping needs.
            </p>
            
            <div className="space-y-4">
              <a
                href={PHONE_URL}
                className="block bg-white text-green-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
              >
                📞 Call Now for Free Estimate
              </a>
              <a
                href={EMAIL_URL}
                className="block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-green-600 transition-colors duration-300"
              >
                ✉️ Email Us Your Project Details
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-darkDesert mb-4">What to Expect</h3>
            <ul className="space-y-3 text-darkDesert">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Free on-site consultation
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Detailed written estimate
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                No pressure, no obligation
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Professional advice and recommendations
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Flexible scheduling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </animated.section>
  );
}

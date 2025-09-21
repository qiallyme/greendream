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
      className="relative min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950 overflow-hidden"
      style={contactSpring}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your outdoor space? Get in touch with us today for a free consultation and estimate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-glass backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div>
              <div className="relative p-8">
                <h2 className="text-2xl font-bold text-primary-200 mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="mr-4 p-3 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-400/30 group-hover:border-primary-400/60 transition-all duration-300">
                      <FaPhone className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-200">Phone</h3>
                      <a href={PHONE_URL} className="text-primary-100 hover:text-primary-300 transition-colors">
                        (463) 320-2025
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="mr-4 p-3 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl border border-accent-400/30 group-hover:border-accent-400/60 transition-all duration-300">
                      <FaEnvelope className="w-6 h-6 text-accent-400 group-hover:text-accent-300 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-200">Email</h3>
                      <a href={EMAIL_URL} className="text-primary-100 hover:text-primary-300 transition-colors">
                        luis.palacios12@icloud.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="mr-4 p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300">
                      <FaMapMarkerAlt className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-200">Service Area</h3>
                      <p className="text-primary-100">Indianapolis, Indiana & Surrounding Areas</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="mr-4 p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300">
                      <FaClock className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-200">Business Hours</h3>
                      <p className="text-primary-100">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-primary-100">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-primary-100">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-700/20 backdrop-blur-xl rounded-2xl border border-primary-400/30 shadow-2xl"></div>
              <div className="relative p-8">
                <h2 className="text-2xl font-bold text-primary-200 mb-4">Free Estimate</h2>
                <p className="mb-6 text-primary-100">
                  Ready to get started? Contact us today for a free, no-obligation estimate.
                  We'll assess your property and provide you with a detailed quote for your landscaping needs.
                </p>

                <div className="space-y-4">
                  <a
                    href={PHONE_URL}
                    className="group block relative p-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
                  >
                    <div className="flex items-center justify-center">
                      <FaPhone className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-300 mr-3" />
                      <span className="font-semibold text-primary-200 group-hover:text-primary-100 transition-colors duration-300">
                        Call Now for Free Estimate
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a
                    href={EMAIL_URL}
                    className="group block relative p-4 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl border border-accent-400/30 hover:border-accent-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25"
                  >
                    <div className="flex items-center justify-center">
                      <FaEnvelope className="w-6 h-6 text-accent-400 group-hover:text-accent-300 transition-colors duration-300 mr-3" />
                      <span className="font-semibold text-primary-200 group-hover:text-primary-100 transition-colors duration-300">
                        Email Us Your Project Details
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-glass backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div>
              <div className="relative p-8">
                <h3 className="text-xl font-bold text-primary-200 mb-4">What to Expect</h3>
                <ul className="space-y-3 text-primary-100">
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span>Free on-site consultation</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span>Detailed written estimate</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span>No pressure, no obligation</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span>Professional advice and recommendations</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span>Flexible scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
}

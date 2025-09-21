import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLeaf,
  FaTools,
} from "react-icons/fa";
import landingImg from "/logo.svg";
import {
  PHONE_URL,
  EMAIL_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  BUSINESS_NAME,
  OWNER_NAME,
  BUSINESS_TAGLINE,
} from "../constants";

export default function Home() {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  return (
    <div
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-screen px-6">
        <animated.div style={logoSpring} className="text-center mb-12">
          {/* Glassmorphism Logo Container */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-glass backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
            <div className="relative p-8">
              <FaLeaf className="w-24 h-24 text-primary-400 mx-auto mb-6 animate-glow" />
              <h1 className="text-6xl font-black bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent mb-4">
                {BUSINESS_NAME}
              </h1>
              <p className="text-2xl text-primary-200 font-light tracking-wide">{BUSINESS_TAGLINE}</p>
              <p className="text-lg text-dark-300 mt-3 font-medium">with {OWNER_NAME}</p>
            </div>
          </div>
        </animated.div>

        <animated.div style={iconSpring} className="flex flex-col items-center">
          {/* Glassmorphism Contact Icons */}
          <div className="bg-glass backdrop-blur-xl rounded-2xl border border-white/20 p-6 mb-8 shadow-2xl">
            <div className="flex space-x-6">
              <a
                href={PHONE_URL}
                className="group relative p-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25"
              >
                <FaPhone className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <span className="sr-only">Call us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href={EMAIL_URL}
                className="group relative p-4 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl border border-accent-400/30 hover:border-accent-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25"
              >
                <FaEnvelope className="w-8 h-8 text-accent-400 group-hover:text-accent-300 transition-colors duration-300" />
                <span className="sr-only">Email us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={FACEBOOK_URL}
                className="group relative p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <FaFacebook className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="sr-only">Facebook</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={INSTAGRAM_URL}
                className="group relative p-4 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <FaInstagram className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                <span className="sr-only">Instagram</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          {/* Glassmorphism Services Tags */}
          <div className="bg-glass backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-primary-200 mb-6 text-center">Our Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Landscaping', 'Yard Scaping', 'Lawn Care', 'Weed Removal', 'Pest Control', 'Debris Removal'].map((service, index) => (
                <div
                  key={service}
                  className="group relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl border border-primary-400/30 group-hover:border-primary-400/60 transition-all duration-300 group-hover:scale-105"></div>
                  <div className="relative px-4 py-3 text-center">
                    <span className="text-sm font-medium text-primary-200 group-hover:text-primary-100 transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

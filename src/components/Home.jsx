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
      className="container mx-auto bg-lightDesert flex flex-col items-center justify-center min-h-screen"
    >
      <animated.div style={logoSpring} className="text-center mb-8">
        <FaLeaf className="w-20 h-20 text-green-600 mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-darkDesert mb-2">{BUSINESS_NAME}</h1>
        <p className="text-2xl text-goldDesert font-semibold">{BUSINESS_TAGLINE}</p>
        <p className="text-lg text-darkDesert mt-2">with {OWNER_NAME}</p>
      </animated.div>

      <animated.div style={iconSpring} className="flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a
            href={PHONE_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaPhone className="w-10 h-10" />
            <span className="sr-only">Call us</span>
          </a>
          <a
            href={EMAIL_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaEnvelope className="w-10 h-10" />
            <span className="sr-only">Email us</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={FACEBOOK_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaFacebook className="w-10 h-10" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={INSTAGRAM_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaInstagram className="w-10 h-10" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
        
        <div className="text-center">
          <h2 className="text-xl font-semibold text-darkDesert mb-4">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Landscaping</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Yard Scaping</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Lawn Care</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Weed Removal</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Pest Control</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Debris Removal</span>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

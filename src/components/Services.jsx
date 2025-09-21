import React from "react";
import { useSpring, animated, config } from "react-spring";
import { 
  FaLeaf, 
  FaTools, 
  FaSeedling, 
  FaBug, 
  FaTrash, 
  FaTree,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import { PHONE_URL, EMAIL_URL } from "../constants";

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  const cardSpring = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.wobbly,
    delay: delay,
  });

  return (
    <animated.div
      style={cardSpring}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <Icon className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-darkDesert">{title}</h3>
      </div>
      <p className="text-darkDesert mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-darkDesert">
            <FaLeaf className="w-4 h-4 text-green-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

const Services = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
  });

  const services = [
    {
      icon: FaTree,
      title: "Professional Landscaping",
      description: "Transform your outdoor space with our comprehensive landscaping design and installation services.",
      features: [
        "Custom landscape design",
        "Plant selection & installation",
        "Hardscaping elements",
        "Irrigation systems",
        "Seasonal maintenance"
      ]
    },
    {
      icon: FaSeedling,
      title: "Yard Scaping & Lawn Care",
      description: "Keep your lawn healthy and beautiful year-round with our expert care services.",
      features: [
        "Lawn mowing & edging",
        "Fertilization programs",
        "Aeration & overseeding",
        "Disease & pest treatment",
        "Seasonal yard preparation"
      ]
    },
    {
      icon: FaBug,
      title: "Weed & Pest Removal",
      description: "Eliminate unwanted weeds and pests with our eco-friendly treatment solutions.",
      features: [
        "Weed identification & removal",
        "Pest control treatments",
        "Preventive maintenance",
        "Eco-friendly solutions",
        "Long-term protection plans"
      ]
    },
    {
      icon: FaTrash,
      title: "Debris Removal & Cleanup",
      description: "Keep your property clean and organized with our comprehensive cleanup services.",
      features: [
        "Yard debris removal",
        "Leaf cleanup",
        "Storm damage cleanup",
        "Property maintenance",
        "Waste disposal"
      ]
    }
  ];

  return (
    <animated.div
      style={fadeIn}
      id="services"
      className="container mx-auto bg-lightDesert min-h-screen py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-darkDesert mb-4">Our Services</h1>
        <p className="text-xl text-goldDesert max-w-3xl mx-auto">
          Professional landscaping services to transform your outdoor space into a beautiful, 
          functional environment you'll love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            delay={index * 200}
          />
        ))}
      </div>

      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-6">
          Contact us today for a free estimate and let's transform your outdoor space!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_URL}
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
          >
            <FaPhone className="mr-2" />
            Call Now
          </a>
          <a
            href={EMAIL_URL}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" />
            Email Us
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default Services;

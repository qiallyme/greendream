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
      className="group relative"
    >
      <div className="absolute inset-0 bg-glass backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl group-hover:border-primary-400/40 transition-all duration-300 group-hover:scale-105"></div>
      <div className="relative p-8">
        <div className="flex items-center mb-6">
          <div className="mr-4 p-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-400/30 group-hover:border-primary-400/60 transition-all duration-300">
            <Icon className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
          </div>
          <h3 className="text-2xl font-bold text-primary-200 group-hover:text-primary-100 transition-colors duration-300">{title}</h3>
        </div>
        <p className="text-primary-100 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center group/item">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
              <span className="text-primary-200 group-hover/item:text-primary-100 transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
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
      className="relative min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
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

        {/* Glassmorphism Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 bg-glass backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
          <div className="relative p-12 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate and let's transform your outdoor space!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Services;

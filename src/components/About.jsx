import React, { memo, useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLeaf, FaTools, FaSeedling } from "react-icons/fa";
import { PHONE_URL, EMAIL_URL, FACEBOOK_URL, INSTAGRAM_URL, OWNER_NAME, BUSINESS_NAME } from "../constants/index";
import { useSpring, animated, config } from "react-spring";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-screen px-6">
        <animated.div
        style={{ ...springProps }}
          className="relative mb-12 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
        >
          <div className="absolute inset-0 bg-glass backdrop-blur-xl rounded-full border border-white/20 shadow-2xl"></div>
          <div className="relative w-64 h-64 flex items-center justify-center">
            <FaSeedling className="w-32 h-32 text-primary-400 animate-glow" />
          </div>
        </animated.div>
      
        <animated.div style={slideUp} className="max-w-6xl mx-auto">
          {/* Glassmorphism Profile Section */}
          <div className="bg-glass backdrop-blur-xl rounded-3xl border border-white/20 p-8 mb-8 shadow-2xl">
            <h1 className="text-5xl font-black bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent mb-4 text-center">
              {OWNER_NAME}
        </h1>
            <h2 className="text-2xl font-light text-primary-200 mb-8 text-center">
              Owner & Lead Landscaper
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <p className="text-lg text-primary-100 leading-relaxed">
                Meet Luis Palacios de la Rosa, a dedicated hard worker with extensive experience in landscaping, yard scaping, and lawn care. With a passion for transforming outdoor spaces, Luis brings enthusiasm and expertise to every project.
              </p>
              
              <p className="text-lg text-primary-100 leading-relaxed">
                As an avid nature enthusiast, Luis understands the importance of creating beautiful, sustainable landscapes that enhance both property value and environmental health. His down-to-earth approach and attention to detail ensure that every client receives exceptional service tailored to their specific needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Services Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-glass backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl group-hover:border-primary-400/40 transition-all duration-300"></div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-primary-200 mb-6 flex items-center">
                  <div className="mr-4 p-3 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-400/30">
                    <FaTools className="w-6 h-6 text-primary-400" />
                  </div>
                  Our Services
                </h3>
                <ul className="text-primary-100 space-y-3">
                  {[
                    'Professional Landscaping Design',
                    'Yard Scaping & Maintenance', 
                    'Lawn Care & Fertilization',
                    'Weed & Pest Removal',
                    'Debris Removal & Cleanup',
                    'Seasonal Yard Preparation'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Why Choose Us Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-glass backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl group-hover:border-accent-400/40 transition-all duration-300"></div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-primary-200 mb-6 flex items-center">
                  <div className="mr-4 p-3 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl border border-accent-400/30">
                    <FaLeaf className="w-6 h-6 text-accent-400" />
                  </div>
                  Why Choose Us
                </h3>
                <ul className="text-primary-100 space-y-3">
                  {[
                    'Experienced & Reliable Team',
                    'Eco-Friendly Practices',
                    'Competitive Pricing',
                    'Free Estimates',
                    'Satisfaction Guaranteed',
                    'Local & Trusted Service'
                  ].map((reason, index) => (
                    <li key={index} className="flex items-center group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-glass backdrop-blur-xl rounded-2xl border border-white/20 p-8 mb-8 shadow-2xl text-center">
            <p className="text-xl text-primary-200 mb-8">
              Ready to transform your outdoor space? Let's work together to create the landscape of your dreams!
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a
                href={PHONE_URL}
                className="group relative p-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25"
              >
                <FaPhone className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                <span className="sr-only">Call us</span>
              </a>
              <a
                href={EMAIL_URL}
                className="group relative p-4 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl border border-accent-400/30 hover:border-accent-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25"
              >
                <FaEnvelope className="w-8 h-8 text-accent-400 group-hover:text-accent-300 transition-colors duration-300" />
                <span className="sr-only">Email us</span>
              </a>
              <a
                href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
                className="group relative p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
          >
                <FaFacebook className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="sr-only">Facebook</span>
          </a>
          <a
                href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
                className="group relative p-4 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <FaInstagram className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                <span className="sr-only">Instagram</span>
              </a>
        </div>
        </div>
      </animated.div>
      </div>
    </animated.div>
  );
};

export default memo(About);

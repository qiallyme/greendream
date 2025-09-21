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
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
    >
      <animated.div
        style={{ ...springProps }}
        className="rounded-full w-64 h-64 border-4 border-green-600 bg-green-100 flex items-center justify-center mb-8 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      >
        <FaSeedling className="w-32 h-32 text-green-600" />
      </animated.div>
      
      <animated.div style={slideUp}>
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
          {OWNER_NAME}
        </h1>
        <h2 className="text-2xl font-semibold text-goldDesert mb-6 text-center px-8">
          Owner & Lead Landscaper
        </h2>
        
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Meet Luis Palacios de la Rosa, a dedicated hard worker with extensive experience in landscaping, yard scaping, and lawn care. With a passion for transforming outdoor spaces, Luis brings enthusiasm and expertise to every project.
        </p>
        
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          As an avid nature enthusiast, Luis understands the importance of creating beautiful, sustainable landscapes that enhance both property value and environmental health. His down-to-earth approach and attention to detail ensure that every client receives exceptional service tailored to their specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 px-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-darkDesert mb-3 flex items-center">
              <FaTools className="mr-2 text-green-600" />
              Our Services
            </h3>
            <ul className="text-darkDesert space-y-2">
              <li>• Professional Landscaping Design</li>
              <li>• Yard Scaping & Maintenance</li>
              <li>• Lawn Care & Fertilization</li>
              <li>• Weed & Pest Removal</li>
              <li>• Debris Removal & Cleanup</li>
              <li>• Seasonal Yard Preparation</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-darkDesert mb-3 flex items-center">
              <FaLeaf className="mr-2 text-green-600" />
              Why Choose Us
            </h3>
            <ul className="text-darkDesert space-y-2">
              <li>• Experienced & Reliable Team</li>
              <li>• Eco-Friendly Practices</li>
              <li>• Competitive Pricing</li>
              <li>• Free Estimates</li>
              <li>• Satisfaction Guaranteed</li>
              <li>• Local & Trusted Service</li>
            </ul>
          </div>
        </div>

        <p className="text-lg text-darkDesert mb-6 text-center px-8">
          Ready to transform your outdoor space? Let's work together to create the landscape of your dreams!
        </p>
        
        <div className="flex justify-center items-center pb-8 space-x-6">
          <Anchor href={PHONE_URL}>
            <FaPhone size={32} />
          </Anchor>
          <Anchor href={EMAIL_URL}>
            <FaEnvelope size={32} />
          </Anchor>
          <Anchor href={FACEBOOK_URL}>
            <FaFacebook size={32} />
          </Anchor>
          <Anchor href={INSTAGRAM_URL}>
            <FaInstagram size={32} />
          </Anchor>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default memo(About);

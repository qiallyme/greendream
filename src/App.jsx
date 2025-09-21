import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import {
  NavBar,
  Home,
  About,
  Services,
  ContactMe,
  Footer,
  NotFound,
} from './components/index';

import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Analytics />
      <Router>
        <div className="bg-lightDesert">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

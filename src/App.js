import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import Separator from './components/Separator.jsx';
import DestinationsSection from './components/DestinationsSection.jsx';
import ContactForm from './components/ContactForm.jsx';
import DestinationEnquiryForm from './components/DestinationEnquiryForm.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <HeroSection />
    <Separator />
    <DestinationsSection />
    <Separator />
  </>
);

const DestinationsPage = () => (
  <>
    <Separator />
    <DestinationEnquiryForm />
    <Separator />
  </>
);

const ContactPage = () => (
  <>
    <Separator />
    <ContactForm />
    <Separator />
  </>
);

export default App;

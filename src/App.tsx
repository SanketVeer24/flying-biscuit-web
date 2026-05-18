/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-creamy-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Features />
        <Gallery />
        <Testimonials />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}


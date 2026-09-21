/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { Services } from './components/Services.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { LocationMap } from './components/LocationMap.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-neutral-100 selection:bg-[#FFD700] selection:text-black">
      {/* Semantic Accessible Header with Navigation */}
      <Header />

      {/* Semantic Accessible Main with Ordered Sections */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <LocationMap />
      </main>

      {/* Semantic Accessible Footer */}
      <Footer />

      {/* Floating Fast WhatsApp Access */}
      <WhatsAppFloatingButton />
    </div>
  );
}

import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <header class="hero-section">
      <div className="botanical-bg-overlay"></div>
      <div className="botanical-leaf leaf-top-left"></div>
      <div className="botanical-leaf leaf-top-right"></div>
      <div className="botanical-leaf leaf-bottom-left"></div>
      <div className="botanical-leaf leaf-bottom-right"></div>

      <div className="hero-content">
        <span className="hero-date">15 . 05 . 2027</span>
        <h1 className="hero-title">Carlos <span className="ampersand">&</span> Sonia</h1>
        <div className="divider-line"></div>
        <blockquote className="hero-quote">
          "Todos somos mortales hasta el primer beso y la segunda copa de vino."
        </blockquote>
        <div className="scroll-down-arrow">
          <ChevronDown size={32} />
        </div>
      </div>
    </header>
  );
}

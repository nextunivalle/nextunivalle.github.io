import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import './Countdown.css';

export default function Countdown({ targetDate = '2027-05-15T17:00:00' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="countdown-section">
      <div className="container">
        <div className="countdown-card">
          <div className="countdown-header">
            <span className="sub-tag">Falta poco para el gran día</span>
            <h2>Cuenta Regresiva</h2>
          </div>
          <div className="countdown-grid">
            <div className="time-box">
              <span className="number">{timeLeft.days}</span>
              <span className="label">Días</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-box">
              <span className="number">{timeLeft.hours}</span>
              <span className="label">Horas</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-box">
              <span className="number">{timeLeft.minutes}</span>
              <span className="label">Minutos</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-box">
              <span className="number">{timeLeft.seconds}</span>
              <span className="label">Segundos</span>
            </div>
          </div>
          <div className="heart-pulse">
            <Heart size={28} fill="#D4AF37" color="#D4AF37" />
          </div>
        </div>
      </div>
    </section>
  );
}

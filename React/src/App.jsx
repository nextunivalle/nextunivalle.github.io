import React, { useState } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import GuestPasses from './components/GuestPasses';
import EventSchedule from './components/EventSchedule';
import PhotoGallery from './components/PhotoGallery';
import PartyFeatures from './components/PartyFeatures';
import RSVPModal from './components/RSVPModal';
import GiftRegistryModal from './components/GiftRegistryModal';
import MusicPlayer from './components/MusicPlayer';
import { CheckCircle, Gift, Camera } from 'lucide-react';
import './App.css';

export default function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Reproductor de Audio Flotante y Bienvenida */}
      <MusicPlayer />

      {/* Hero Portada */}
      <Hero />

      {/* Cuenta Regresiva */}
      <Countdown targetDate="2027-05-15T17:00:00" />

      {/* Pase de Invitados */}
      <GuestPasses passes={2} names={['Lola Pérez', 'Tomás Pérez']} />

      {/* Calendario & Lugares */}
      <EventSchedule />

      {/* Banner RSVP */}
      <section className="rsvp-banner-section">
        <div className="container text-center">
          <h2>Confirmar Asistencia</h2>
          <p>Es muy importante para nosotros saber si contaremos con tu presencia antes del 15 de Abril.</p>
          <button className="btn btn-gold btn-lg" onClick={() => setIsRSVPOpen(true)}>
            <CheckCircle size={20} />
            Confirmar Asistencia
          </button>
        </div>
      </section>

      {/* Galería de Fotos */}
      <PhotoGallery />

      {/* Detalles de la Fiesta */}
      <PartyFeatures />

      {/* Mesa de Regalos */}
      <section className="gifts-section text-center">
        <div className="container">
          <div className="gift-box-icon" style={{ display: 'inline-block', marginBottom: '15px' }}>
            <Gift size={44} color="#2D4A3E" />
          </div>
          <h2 style={{ fontSize: '2.5rem' }}>Mesa de Regalos</h2>
          <p className="gifts-sub" style={{ maxWidth: '500px', margin: '10px auto 25px', color: 'var(--color-text-muted)' }}>
            Tu presencia es nuestro mejor regalo. Pero si deseas hacernos un obsequio adicional...
          </p>
          <button className="btn btn-gold btn-md" onClick={() => setIsGiftOpen(true)}>
            Ver Datos Bancarios / Regalos
          </button>
        </div>
      </section>

      {/* Instagram */}
      <section className="instagram-section text-center">
        <div className="container">
          <Camera size={40} color="#2D4A3E" style={{ margin: '0 auto 10px' }} />
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', margin: '10px 0' }}>#CarlosYSonia2027</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>Comparte tus fotos y videos en Instagram usando nuestro hashtag oficial.</p>
          <a 
            href="https://www.instagram.com/explore/tags/carlosysonia2027" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-outline"
          >
            Ver en Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer text-center" style={{ background: 'var(--color-primary)', color: '#fff', padding: '40px 20px' }}>
        <div className="container">
          <p className="footer-names" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--color-accent)' }}>
            Carlos & Sonia
          </p>
          <p className="footer-copy" style={{ margin: '10px 0 15px', color: 'rgba(255, 255, 255, 0.8)' }}>
            Gracias por formar parte de nuestras vidas.
          </p>
          <small style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Desarrollado con ♥ - React Digital Invitation</small>
        </div>
      </footer>

      {/* Modales */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
      <GiftRegistryModal isOpen={isGiftOpen} onClose={() => setIsGiftOpen(false)} />
    </div>
  );
}

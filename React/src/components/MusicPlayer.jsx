import React, { useState, useRef } from 'react';
import { Play, Pause, Heart, X } from 'lucide-react';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const audioRef = useRef(null);

  const handlePlayWithMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log('Autoplay error:', err));
    }
    setShowWelcomeModal(false);
  };

  const handlePlayWithoutMusic = () => {
    setIsPlaying(false);
    setShowWelcomeModal(false);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="https://assets.mixkit.co/music/preview/mixkit-wedding-march-piano-686.mp3" type="audio/mpeg" />
      </audio>

      {/* Modal Inicial de Bienvenida */}
      {showWelcomeModal && (
        <div className="modal-overlay">
          <div className="modal-card text-center">
            <Heart size={44} color="#2D4A3E" fill="#E8F0EC" style={{ margin: '0 auto 10px' }} />
            <h2>¡Bienvenidos!</h2>
            <p className="modal-names">Carlos & Sonia</p>
            <p className="modal-sub">La música de fondo es parte esencial de la experiencia de nuestra invitación.</p>
            
            <div className="modal-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button className="btn btn-primary" onClick={handlePlayWithMusic}>
                <Play size={18} fill="#FFF" />
                Ingresar con música
              </button>
              <button className="btn btn-outline" onClick={handlePlayWithoutMusic}>
                Ingresar sin música
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Control Flotante */}
      <div className="floating-audio">
        <button 
          className={`audio-circle-btn ${!isPlaying ? 'paused' : ''}`}
          onClick={toggleAudio}
          title="Reproducir / Pausar Música"
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: '2px' }} />}
          {isPlaying && (
            <div className="audio-waves">
              <span></span><span></span><span></span>
            </div>
          )}
        </button>
      </div>
    </>
  );
}

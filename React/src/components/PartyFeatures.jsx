import React, { useState } from 'react';
import { Music, Shirt, Lightbulb, X, Send } from 'lucide-react';
import './PartyFeatures.css';

export default function PartyFeatures() {
  const [activeModal, setActiveModal] = useState(null);
  const [song, setSong] = useState('');

  const handleSongSubmit = (e) => {
    e.preventDefault();
    if (!song) return;

    const texto = `🎵 *SUGERENCIA DE CANCIÓN PARA LA BODA*\n\nHola! Me gustaría sugerir el tema: *${song}*`;
    const url = `https://api.whatsapp.com/send?phone=59170000000&text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    setActiveModal(null);
    setSong('');
  };

  return (
    <section className="party-features-section">
      <div className="container text-center">
        <span className="sub-tag">Sugerencias y Detalles</span>
        <h2>Fiesta Épica</h2>
        <p className="features-sub">Hagamos juntos una celebración inolvidable. Ten en cuenta estos detalles:</p>

        <div className="features-grid">
          {/* Música */}
          <div className="feature-card">
            <div className="feature-icon"><Music size={36} color="#2D4A3E" /></div>
            <h3>Música</h3>
            <p>¿Cuál es la canción que no debe faltar en la Playlist de la fiesta?</p>
            <button className="btn btn-sm btn-outline" onClick={() => setActiveModal('song')}>
              Sugerir Canción
            </button>
          </div>

          {/* Dress Code */}
          <div className="feature-card">
            <div className="feature-icon"><Shirt size={36} color="#2D4A3E" /></div>
            <h3>Dress Code</h3>
            <p>Una pequeña guía para elegir tu atuendo ideal para la gran ocasión.</p>
            <button className="btn btn-sm btn-outline" onClick={() => setActiveModal('dresscode')}>
              Ver Código de Vestimenta
            </button>
          </div>

          {/* Tips y Notas */}
          <div className="feature-card">
            <div className="feature-icon"><Lightbulb size={36} color="#2D4A3E" /></div>
            <h3>Tips y Notas</h3>
            <p>Información útil sobre hospedaje, clima y recomendaciones generales.</p>
            <button className="btn btn-sm btn-outline" onClick={() => setActiveModal('tips')}>
              + Info Importante
            </button>
          </div>
        </div>
      </div>

      {/* Modal Sugerir Canción */}
      {activeModal === 'song' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}><X size={24} /></button>
            <div className="modal-header text-center">
              <h3>Sugerir una Canción</h3>
              <p>¿Qué tema no puede faltar en la pista de baile?</p>
            </div>
            <form onSubmit={handleSongSubmit}>
              <div className="form-group">
                <label>Nombre de la Canción / Artista:</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ej: La Cumparsita - Orquesta" 
                  className="form-control"
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-2">
                <Send size={16} /> Enviar Sugerencia
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Dress Code */}
      {activeModal === 'dresscode' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card text-center" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}><X size={24} /></button>
            <Shirt size={44} color="#2D4A3E" style={{ margin: '0 auto 15px' }} />
            <h3>Dress Code: Formal / Elegante</h3>
            <p className="mt-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              Queremos que te veas espectacular en nuestras fotos de recuerdo.
            </p>
            <div style={{ textAlign: 'left', marginTop: '20px', fontSize: '0.9rem' }}>
              <p style={{ marginBottom: '10px' }}><strong>Ellas:</strong> Vestido largo o de cóctel elegante (evitar tonos blancos).</p>
              <p><strong>Ellos:</strong> Traje formal u ambo oscuro con corbata/moño.</p>
            </div>
            <button className="btn btn-primary w-100 mt-4" onClick={() => setActiveModal(null)}>
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Modal Tips */}
      {activeModal === 'tips' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}><X size={24} /></button>
            <div className="modal-header text-center">
              <h3>Información Útil & Tips</h3>
            </div>
            <ul style={{ listStyle: 'none', paddingLeft: '10px', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '12px' }}>🌿 <strong>Clima:</strong> Ceremonia al aire libre. Sugerimos un abrigo liviano para la noche.</li>
              <li style={{ marginBottom: '12px' }}>🌿 <strong>Estacionamiento:</strong> El salón cuenta con estacionamiento privado con seguridad.</li>
              <li style={{ marginBottom: '12px' }}>🌿 <strong>Puntualidad:</strong> Les pedimos llegar 15 minutos antes del inicio de la ceremonia.</li>
            </ul>
            <button className="btn btn-primary w-100 mt-3" onClick={() => setActiveModal(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

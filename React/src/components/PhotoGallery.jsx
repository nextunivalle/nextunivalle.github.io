import React, { useState } from 'react';
import { X } from 'lucide-react';
import './PhotoGallery.css';

export default function PhotoGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      caption: 'Momento Mágico',
      rotation: '-2deg'
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      caption: 'El Sí, Acepto',
      rotation: '2deg'
    },
    {
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      caption: 'Aventuras Juntos',
      rotation: '-1deg'
    },
    {
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      caption: 'Amor Infinito',
      rotation: '3deg'
    }
  ];

  return (
    <section className="gallery-section">
      <div className="container text-center">
        <span className="sub-tag">Nuestra Historia</span>
        <h2>Retratos de Nuestro Amor</h2>
        <p className="gallery-sub">Un minuto, un segundo, un instante que queda en la eternidad.</p>

        <div className="polaroid-grid">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="polaroid-card"
              style={{ transform: `rotate(${photo.rotation})` }}
              onClick={() => setSelectedImg(photo)}
            >
              <div className="polaroid-img-wrapper">
                <img src={photo.src} alt={photo.caption} />
              </div>
              <span className="polaroid-caption">{photo.caption}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close light" onClick={() => setSelectedImg(null)}>
              <X size={28} />
            </button>
            <img src={selectedImg.src} alt={selectedImg.caption} />
            <p className="lightbox-caption">{selectedImg.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

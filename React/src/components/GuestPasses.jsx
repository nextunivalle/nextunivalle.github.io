import React from 'react';
import './GuestPasses.css';

export default function GuestPasses({ passes = 2, names = ['Lola Pérez', 'Tomás Pérez'] }) {
  return (
    <section className="guests-section">
      <div className="container">
        <div className="guests-card">
          <div className="badge-passes">{passes} PASES RESERVADOS</div>
          <h3 className="guests-title">INVITADOS ESPECIALES</h3>
          <ul className="guest-names-list">
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <p className="guests-message">
            Nos encanta compartir este momento tan especial con ustedes. ¡Los esperamos con mucha ilusión!
          </p>
        </div>
      </div>
    </section>
  );
}

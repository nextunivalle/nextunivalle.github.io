import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Send } from 'lucide-react';
import './RSVPModal.css';

export default function RSVPModal({ isOpen, onClose }) {
  const [nombre, setNombre] = useState('');
  const [asistencia, setAsistencia] = useState('si');
  const [menu, setMenu] = useState('');
  const [autobus, setAutobus] = useState('no');
  const [ninios, setNinios] = useState(0);
  const [mensaje, setMensaje] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    let textoWhatsApp = `*CONFIRMACIÓN DE ASISTENCIA - BODA CARLOS Y SONIA*\n\n`;
    textoWhatsApp += `👤 *Nombre:* ${nombre}\n`;
    textoWhatsApp += `📌 *Asistencia:* ${asistencia === 'si' ? 'Sí, asistiré con mucho gusto' : 'Lamentablemente no podré asistir'}\n`;

    if (asistencia === 'si') {
      if (menu) textoWhatsApp += `🥗 *Menú/Restricciones:* ${menu}\n`;
      textoWhatsApp += `🚌 *Autobús:* ${autobus === 'si' ? 'Sí necesita' : 'No necesita'}\n`;
      if (ninios > 0) textoWhatsApp += `👶 *Niños:* ${ninios}\n`;
    }

    if (mensaje) textoWhatsApp += `💌 *Mensaje:* ${mensaje}\n`;

    const phone = '59170000000';
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(textoWhatsApp)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card modal-lg" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        
        <div className="modal-header text-center">
          <h3>Confirmar Asistencia (RSVP)</h3>
          <p>Por favor completa tus datos para agendar tu asistencia</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>¿Quién confirma?</label>
            <input 
              type="text" 
              required 
              placeholder="Nombre completo" 
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Asistencia:</label>
            <div className="radio-group">
              <label>
                <input 
                  type="radio" 
                  name="asistencia" 
                  value="si" 
                  checked={asistencia === 'si'} 
                  onChange={() => setAsistencia('si')}
                /> Sí, asistiré con mucho gusto
              </label>
              <label>
                <input 
                  type="radio" 
                  name="asistencia" 
                  value="no" 
                  checked={asistencia === 'no'} 
                  onChange={() => setAsistencia('no')}
                /> Lamentablemente no podré asistir
              </label>
            </div>
          </div>

          {asistencia === 'si' && (
            <>
              <div className="form-group">
                <label>Restricciones Alimentarias / Menú Especial:</label>
                <textarea 
                  placeholder="Celíaco, vegano, vegetariano, alergias, etc." 
                  className="form-control" 
                  rows="2"
                  value={menu}
                  onChange={(e) => setMenu(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>¿Necesitas servicio de autobús?</label>
                <select 
                  className="form-control"
                  value={autobus}
                  onChange={(e) => setAutobus(e.target.value)}
                >
                  <option value="no">No, iré por mis propios medios</option>
                  <option value="si">Sí, necesito transporte</option>
                </select>
              </div>

              <div className="form-group">
                <label>Niños acompañantes:</label>
                <input 
                  type="number" 
                  min="0" 
                  max="5" 
                  className="form-control"
                  value={ninios}
                  onChange={(e) => setNinios(parseInt(e.target.value) || 0)}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label>Mensaje para los novios:</label>
            <textarea 
              placeholder="Déjales un lindo deseo..." 
              className="form-control" 
              rows="3"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            <Send size={18} />
            Enviar Confirmación por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

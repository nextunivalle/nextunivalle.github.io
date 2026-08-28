import React from 'react';
import { Gift, X, Copy } from 'lucide-react';

export default function GiftRegistryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`¡Copiado al portapapeles: ${text}!`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card text-center" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <Gift size={44} color="#2D4A3E" style={{ margin: '0 auto 15px' }} />
        <h3>Mesa de Regalos</h3>
        <p className="mt-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          Si deseas realizar una transferencia bancaria o regalo en efectivo:
        </p>

        <div style={{
          background: 'var(--color-bg-light)',
          padding: '18px',
          borderRadius: '12px',
          border: '1px solid var(--color-sage)',
          fontSize: '0.9rem',
          textAlign: 'left',
          marginTop: '20px'
        }}>
          <p style={{ marginBottom: '6px' }}><strong>Banco:</strong> Banco Nacional</p>
          <p style={{ marginBottom: '6px' }}><strong>Titulares:</strong> Carlos & Sonia</p>
          <p style={{ marginBottom: '6px' }}><strong>CBU / Nro Cuenta:</strong> 0123456789123456789012</p>
          <p><strong>Alias:</strong> BODA.CARLOS.SONIA</p>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
          <button className="btn btn-outline btn-sm" onClick={() => copyToClipboard('BODA.CARLOS.SONIA')}>
            <Copy size={14} /> Copiar Alias
          </button>
          <button className="btn btn-outline btn-sm" onClick={() => copyToClipboard('0123456789123456789012')}>
            <Copy size={14} /> Copiar CBU
          </button>
        </div>
      </div>
    </div>
  );
}

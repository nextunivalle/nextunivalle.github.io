import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import './EventSchedule.css';

export default function EventSchedule() {
  const openCalendar = (title, startDate, location) => {
    const eventTitle = encodeURIComponent(`Boda de Carlos y Sonia (${title})`);
    const eventDetails = encodeURIComponent(`¡Acompáñanos a celebrar nuestro gran día!`);
    const eventLoc = encodeURIComponent(location);

    const start = new Date(startDate).toISOString().replace(/-|:|\.\d\d\d/g, "");
    const endDate = new Date(new Date(startDate).getTime() + 4 * 60 * 60 * 1000);
    const end = endDate.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${start}/${end}&details=${eventDetails}&location=${eventLoc}`;
    window.open(url, '_blank');
  };

  return (
    <section className="events-section">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-tag">Dónde y Cuándo</span>
          <h2>Nuestra Boda</h2>
        </div>

        <div className="events-grid">
          {/* Ceremonia */}
          <div className="event-card">
            <div className="event-icon">
              <svg viewBox="0 0 64 64" width="54" height="54" fill="none" stroke="#2D4A3E" strokeWidth="2">
                <circle cx="24" cy="32" r="14"/>
                <circle cx="40" cy="32" r="14"/>
                <path d="M32 18l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="#D4AF37" stroke="none"/>
              </svg>
            </div>
            <h3>Ceremonia Religiosa</h3>
            <div className="event-details">
              <p className="event-date"><strong>Día:</strong> Sábado 15 de Mayo - 17:00 hs</p>
              <p className="event-place"><strong>Lugar:</strong> Parroquia Nuestra Señora de Luján</p>
              <p className="event-address">Av. Pergamino 203, La Paz</p>
            </div>
            <div className="event-actions">
              <button 
                className="btn btn-sm btn-primary"
                onClick={() => openCalendar('Ceremonia', '2027-05-15T17:00:00', 'Parroquia Nuestra Señora de Lujan')}
              >
                <Calendar size={16} />
                Agendar
              </button>
              <a 
                href="https://maps.google.com/?q=Parroquia+Nuestra+Señora+de+Lujan+La+Paz" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-sm btn-outline"
              >
                <MapPin size={16} />
                ¿Cómo llegar?
              </a>
            </div>
          </div>

          {/* Fiesta */}
          <div className="event-card">
            <div className="event-icon">
              <svg viewBox="0 0 64 64" width="54" height="54" fill="none" stroke="#2D4A3E" strokeWidth="2">
                <path d="M20 44l-6 12h36l-6-12H20z"/>
                <path d="M32 12v32M20 20l24 0M16 28l32 0"/>
                <circle cx="32" cy="12" r="4" fill="#D4AF37"/>
              </svg>
            </div>
            <h3>Celebración & Fiesta</h3>
            <div className="event-details">
              <p className="event-date"><strong>Día:</strong> Sábado 15 de Mayo - 20:00 hs</p>
              <p className="event-place"><strong>Lugar:</strong> Salón de Fiestas Avril</p>
              <p className="event-address">Av. Los Reartes 12, La Paz</p>
            </div>
            <div className="event-actions">
              <button 
                className="btn btn-sm btn-primary"
                onClick={() => openCalendar('Fiesta', '2027-05-15T20:00:00', 'Salon de fiestas Avril')}
              >
                <Calendar size={16} />
                Agendar
              </button>
              <a 
                href="https://maps.google.com/?q=Salon+de+fiestas+Avril+La+Paz" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-sm btn-outline"
              >
                <MapPin size={16} />
                ¿Cómo llegar?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

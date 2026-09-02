// ==========================================================================
// UNIVALLE NEXT+ INVITACIÓN DIGITAL - MAIN JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initAudio();
  initOpeningScene();
  initCountdown();
});

// 1. PRELOADER
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.classList.add('fade-out');
    });
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 2000);
  }
}

// 2. ESCENA DE APERTURA DE SOBRE Y TRANSICIÓN DE PANTALLAS
function initOpeningScene() {
  const openingScene = document.getElementById('opening-scene');
  const invitationMain = document.getElementById('invitation-main');
  const btnAbrir = document.getElementById('btn-abrir-invitacion');
  const btnAbrirAction = document.getElementById('btn-abrir-invitacion-action');
  const audio = document.getElementById('bg-audio');

  let opened = false;

  function handleOpen(e) {
    if (e) e.preventDefault();
    if (opened || !openingScene) return;
    opened = true;

    // Reproducción inmediata de audio tras la interacción del usuario
    if (audio) {
      audio.volume = 0.6;
      audio.play().then(() => {
        audioPlaying = true;
        updateAudioUI();
      }).catch(err => {
        console.warn('El navegador requirió interacción adicional para el audio:', err);
      });
    }

    // Iniciar animación de apertura del sobre 3D
    openingScene.classList.add('is-opening');

    // Desvanecer la pantalla de bienvenida y revelar la invitación principal justo debajo
    setTimeout(() => {
      if (openingScene) {
        openingScene.classList.add('fade-away');
        setTimeout(() => {
          openingScene.style.display = 'none';
        }, 600);
      }
    }, 1100);
  }

  if (btnAbrir) btnAbrir.addEventListener('click', handleOpen);
  if (btnAbrirAction) btnAbrirAction.addEventListener('click', handleOpen);
}

// 2. CONTROL DE AUDIO DE FONDO
let audioPlaying = false;

function initAudio() {
  const audio = document.getElementById('bg-audio');
  const btnMusicModal = document.getElementById('btn-ingresar-musica');
  const btnNoMusicModal = document.getElementById('btn-ingresar-sin-musica');
  const btnToggleAudio = document.getElementById('btn-toggle-audio');

  if (audio) {
    audio.volume = 0.6; // Volumen moderado para música de fondo
  }

  // Ingresar con música
  if (btnMusicModal) {
    btnMusicModal.addEventListener('click', (e) => {
      e.preventDefault();
      if (audio) {
        audio.play().then(() => {
          audioPlaying = true;
          updateAudioUI();
        }).catch(err => {
          console.warn('El navegador bloqueó la reproducción automática:', err);
        });
      }
      closeModal('modal-musica');
    });
  }

  // Ingresar sin música
  if (btnNoMusicModal) {
    btnNoMusicModal.addEventListener('click', (e) => {
      e.preventDefault();
      audioPlaying = false;
      if (audio) audio.pause();
      updateAudioUI();
      closeModal('modal-musica');
    });
  }

  // Botón flotante para alternar audio (Play/Pause)
  if (btnToggleAudio) {
    btnToggleAudio.addEventListener('click', () => {
      if (audio) {
        if (audioPlaying) {
          audio.pause();
          audioPlaying = false;
        } else {
          audio.play().then(() => {
            audioPlaying = true;
            updateAudioUI();
          }).catch(err => {
            console.error('Error al reproducir audio:', err);
          });
        }
        updateAudioUI();
      }
    });
  }
}

function updateAudioUI() {
  const btnToggleAudio = document.getElementById('btn-toggle-audio');
  if (btnToggleAudio) {
    if (audioPlaying) {
      btnToggleAudio.classList.remove('paused');
    } else {
      btnToggleAudio.classList.add('paused');
    }
  }
}

// 3. CUENTA REGRESIVA (Jueves 17 de Septiembre de 2026 - 19:00 hs)
function initCountdown() {
  const targetDate = new Date('2026-09-17T19:00:00').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (difference <= 0) {
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minutesEl.innerText = '00';
      secondsEl.innerText = '00';
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysEl.innerText = days < 10 ? '0' + days : days;
    daysEl.innerText = days;
    hoursEl.innerText = hours < 10 ? '0' + hours : hours;
    minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// 4. CONTROL DE MODALES
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// 5. ENVÍO DE FORMULARIO RSVP A WHATSAPP (UNIVALLE NEXT+)
function handleRSVPSubmit(e) {
  e.preventDefault();

  const nombre = document.getElementById('rsvp-nombre').value;
  const cargo = document.getElementById('rsvp-cargo').value;
  const asistenciaRadios = document.getElementsByName('asistencia');
  let asistencia = 'Sí, asistiré';
  for (const radio of asistenciaRadios) {
    if (radio.checked) {
      asistencia = radio.value === 'si' ? 'Sí, asistiré con agrado' : 'Lamentablemente no podré asistir';
    }
  }

  const mensaje = document.getElementById('rsvp-mensaje').value;

  let textoWhatsApp = `*CONFIRMACIÓN DE ASISTENCIA - UNIVALLE NEXT+*\n\n`;
  textoWhatsApp += `👤 *Nombre:* ${nombre}\n`;
  if (cargo) textoWhatsApp += `🏛️ *Institución/Cargo:* ${cargo}\n`;
  textoWhatsApp += `📌 *Asistencia:* ${asistencia}\n`;

  if (mensaje) textoWhatsApp += `📝 *Mensaje:* ${mensaje}\n`;

  // Número de WhatsApp para confirmaciones (Ing. Christian Max Montaño)
  const phone = '59179957137';
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(textoWhatsApp)}`;

  window.open(url, '_blank');
  closeModal('modal-rsvp');
}

// 6. AGENDAR EVENTO EN GOOGLE CALENDAR
function openCalendarModal(title, startDate, location) {
  const eventTitle = encodeURIComponent(`UNIVALLE NEXT+ - ${title}`);
  const eventDetails = encodeURIComponent(`Presentación Oficial del nuevo ecosistema digital de educación UNIVALLE NEXT+.\nLugar: Torre Académica América – Auditorio Gonzalo Ruiz.`);
  const eventLoc = encodeURIComponent(location);
  
  const start = new Date(startDate).toISOString().replace(/-|:|\.\d\d\d/g, "");
  const endDate = new Date(new Date(startDate).getTime() + 2 * 60 * 60 * 1000); // 2 horas de duración
  const end = endDate.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${start}/${end}&details=${eventDetails}&location=${eventLoc}`;
  
  window.open(googleUrl, '_blank');
}

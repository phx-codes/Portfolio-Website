function updateLocalTime() {
  const now = new Date();
  const options = { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
  };
  document.getElementById("local-time").textContent = now.toLocaleTimeString([], options);
}
setInterval(updateLocalTime, 1000);
updateLocalTime();

document.addEventListener('DOMContentLoaded', () => {
  const openNavBtn = document.querySelector('.nav-toggle'); 
  const fullScreenMenu = document.getElementById('full-screen-menu'); 
  const navLinks = document.querySelectorAll('.overlay-nav a'); 

  const contactModal = document.getElementById('contact-modal'); 
  const contactPopupClose = document.querySelector('.contact-popup-close'); 
  const openModalBtns = document.querySelectorAll('.btn-contact-nav, .btn-contact, .modal-open-link'); 
  const contactForm = document.getElementById('contact-form');

  const closeNav = () => {
      fullScreenMenu.classList.remove('open');
      openNavBtn.classList.remove('active'); 
  };

  const openModal = (e) => {
      e.preventDefault(); 
      contactModal.classList.add('open');
      document.body.style.overflow = 'hidden'; 
      closeNav(); 
  };

  const closeModal = () => {
      contactModal.classList.remove('open');
      document.body.style.overflow = '';
      if (contactForm) contactForm.reset(); 
  };

  if (openNavBtn) openNavBtn.addEventListener('click', () => { 
      fullScreenMenu.classList.add('open'); 
      openNavBtn.classList.add('active'); 
  });
  
  if (fullScreenMenu) {
      fullScreenMenu.addEventListener('click', (e) => {
          if (e.target.id === 'full-screen-menu') {
              closeNav();
          }
      });
  }
  
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          if (link.classList.contains('modal-open-link')) {
              openModal(e);
          } else {
              closeNav();
              const targetId = link.getAttribute('href');
              const targetSection = document.querySelector(targetId);
              if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
          }
      });
  });

  openModalBtns.forEach(btn => {
      btn.addEventListener('click', openModal);
  });

  if (contactPopupClose) contactPopupClose.addEventListener('click', closeModal);
  
  if (contactModal) {
      contactModal.addEventListener('click', (e) => {
          if (e.target === contactModal) {
              closeModal();
          }
      });
  }
});
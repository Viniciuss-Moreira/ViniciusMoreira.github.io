// Navegação ativa
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.nav-links a.active').classList.remove('active');
      this.classList.add('active');
      
      const target = document.querySelector(this.getAttribute('href'));
      document.querySelectorAll('.section').forEach(section => {
          section.classList.remove('active');
      });
      target.classList.add('active');
      
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

// Animação ao scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
      }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .hero').forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(50px)";
  element.style.transition = "all 0.6s ease-out";
  observer.observe(element);
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Adicionar lógica de envio aqui
  alert('Mensagem enviada com sucesso!');
  this.reset();
});
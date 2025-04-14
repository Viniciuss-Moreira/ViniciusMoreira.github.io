// Smooth scroll para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animação no scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.project-card, .hero-content');
  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < window.innerHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
});

// Contato Form Handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Adicionar lógica de envio aqui
  alert('Mensagem enviada com sucesso!');
  e.target.reset();
});
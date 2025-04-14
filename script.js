// Função para implementar o scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Adicionar/Remover a classe "active" aos links de navegação ao rolar a página
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Função para verificar a seção visível na tela
function highlightActiveSection() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Verifica a seção ativa enquanto o usuário rola a página
window.addEventListener('scroll', highlightActiveSection);

// Função de transição para links no menu ao clicar
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

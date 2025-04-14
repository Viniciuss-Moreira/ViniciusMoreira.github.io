// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Função para destacar a seção atual no menu
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  function highlightSection() {
      let scrollPosition = window.scrollY;

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href').substring(1) === section.id) {
                      link.classList.add('active');
                  }
              });
          }
      });
  }

  // Adiciona o evento de rolagem
  window.addEventListener('scroll', highlightSection);

  // Exibe uma mensagem no console quando a página é carregada
  console.log("Portfólio carregado com sucesso!");

  // Exemplo de funcionalidade para mostrar/ocultar detalhes do projeto
  const projetos = document.querySelectorAll('.projeto');

  projetos.forEach(projeto => {
      const toggleButton = document.createElement('button');
      toggleButton.textContent = 'Mostrar Detalhes';
      projeto.appendChild(toggleButton);

      toggleButton.addEventListener('click', () => {
          const detalhes = projeto.querySelector('.detalhes');
          if (detalhes) {
              detalhes.classList.toggle('hidden');
              toggleButton.textContent = detalhes.classList.contains('hidden') ? 'Mostrar Detalhes' : 'Ocultar Detalhes';
          }
      });
  });
});
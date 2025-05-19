document.querySelectorAll('nav a').forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.opacity = 1;
    }, 50);
  
    const themeToggle = document.getElementById('toggle-theme');
    const prefersDark = localStorage.getItem('theme') === 'dark';
  
    if (prefersDark) {
      document.body.classList.add('dark');
    }
  
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
      });
    }
  });

  const form = document.getElementById('form-contato');
const resposta = document.getElementById('resposta');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const dados = {
    nome: form.nome.value,
    email: form.email.value,
    mensagem: form.mensagem.value,
  };

  try {
    const res = await fetch('https://api-do-portfolio.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    });

    if (!res.ok) throw new Error('Erro na requisição');

    const json = await res.json();
    resposta.textContent = json.mensagem;
    resposta.style.color = 'green';
    form.reset();
  } catch (error) {
    resposta.textContent = 'Erro ao enviar. Tente novamente.';
    resposta.style.color = 'red';
  }
});

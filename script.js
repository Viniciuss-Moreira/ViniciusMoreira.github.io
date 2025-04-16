// Marca menu ativo
document.querySelectorAll('nav a').forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
  
  // Transição suave na entrada
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.opacity = 1;
    }, 50);
  
    // Modo escuro
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
  const toggleTheme = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  updateIcon(theme);
}

function updateIcon(theme) {
  if (theme === "dark") {
    themeIcon.innerHTML = `
      <path d="M21.64 13.02A9 9 0 0 1 11 2a1 1 0 0 0-1 1 9 9 0 1 0 9.64 10.02Z" />
    `;
  } else {
    themeIcon.innerHTML = `
      <path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 0 1-2 0V5.5a1 1 0 0 1 1-1Zm6.364 1.636a1 1 0 0 1 1.414 1.414l-1.06 1.06a1 1 0 0 1-1.414-1.414l1.06-1.06ZM19.5 11a1 1 0 1 1 0 2H18a1 1 0 1 1 0-2h1.5ZM6.222 6.222a1 1 0 1 1 1.414 1.414L6.576 8.697a1 1 0 1 1-1.414-1.414l1.06-1.06ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-8 3a1 1 0 1 1 0 2H2.5a1 1 0 1 1 0-2H4Zm3.222 7.778a1 1 0 0 1 0-1.414l1.06-1.06a1 1 0 1 1 1.414 1.414l-1.06 1.06a1 1 0 0 1-1.414 0ZM12 17a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Zm6.364-.636a1 1 0 0 1 1.414 1.414l-1.06 1.06a1 1 0 0 1-1.414-1.414l1.06-1.06Z"/>
    `;
  }
}

// Detecta tema salvo
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Evento de clique
toggleTheme.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

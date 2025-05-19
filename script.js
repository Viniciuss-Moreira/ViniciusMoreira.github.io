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
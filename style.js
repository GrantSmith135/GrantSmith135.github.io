// script.js
document.addEventListener('DOMContentLoaded', function() {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  // mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open');
    });
  }

  // project dialog (placeholder)
  const dialog = document.getElementById('projectDialog');
  const title = document.getElementById('dialogTitle');
  const body = document.getElementById('dialogBody');

  function openDialog(name, desc) {
    if (!dialog || !title || !body) { return; }
    title.textContent = name;
    body.textContent = desc;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      // fallback
      alert(name + "\n\n" + desc);
    }
  }

  const buttons = document.querySelectorAll('.project-card .button.subtle');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const id = btn.getAttribute('data-project') || 'X';
      openDialog('Project ' + id, 'Replace this with details and links once your repo is ready.');
    });
  });
});

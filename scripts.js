document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const closeButtons = document.querySelectorAll('.auth-form .close-btn');

  loginBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  });

  registerBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      loginForm.classList.add('hidden');
      registerForm.classList.add('hidden');
    });
  });

  document.addEventListener('click', (event) => {
    if (!loginForm.contains(event.target) && event.target !== loginBtn) {
      loginForm.classList.add('hidden');
    }
    if (!registerForm.contains(event.target) && event.target !== registerBtn) {
      registerForm.classList.add('hidden');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const submenuParents = document.querySelectorAll('.sidebar-nav .has-submenu > a');

  submenuParents.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // чтобы не переходить по #
      const parentLi = link.parentElement;

      // переключаем класс active, чтобы показать или скрыть подменю
      parentLi.classList.toggle('active');
    });
  });
});


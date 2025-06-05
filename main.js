const menuIcon = document.getElementById('menu_icon');
const closeIcon = document.getElementById('close_icon');
const navUl = document.querySelector('nav ul');

function openNav() {
  navUl.classList.add('active');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
}

function closeNav() {
  navUl.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
}

// Initialize state on load (mobile)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    // reset menu state on desktop
    navUl.classList.remove('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'none';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});

// On initial load
if (window.innerWidth < 768) {
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
} else {
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'none';
}

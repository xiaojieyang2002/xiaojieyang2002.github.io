const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
  mobileNav.hidden = !open;
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', '打开菜单');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

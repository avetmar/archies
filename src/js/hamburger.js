window.addEventListener('DOMContentLoaded', () => {
    try {
      const menu = document.querySelector('.header__navigation'),
    menuItem = document.querySelectorAll('.nav_hover'),
    hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__navigation_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__navigation_active');
        })
    })
    } catch (e) {}
  })
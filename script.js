const btnMenu = document.querySelector('.header-menu')
const menu = document.querySelector('.menu-side')

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-side-active')
})

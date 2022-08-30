const btnMenu = document.querySelector('.logo-menu')
const menu = document.querySelector('.liste-nav')

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active')
})

const allLikns = document.querySelectorAll('.item-nav')

// Quand on clique sur un lien, le menu se ferme.
allLikns.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
})

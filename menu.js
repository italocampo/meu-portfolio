let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})
// COMANDO PARA O BOTÃO SER ACIONADO AO CLICAR NO MENU

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
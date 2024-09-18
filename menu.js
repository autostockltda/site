
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


function toggleButton() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const accessButton = document.getElementById('accessButton');

    if (emailInput.value && passwordInput.value) {
        accessButton.style.pointerEvents = 'auto';
        accessButton.style.opacity = '1';
    } else {
        accessButton.style.pointerEvents = 'none';
        accessButton.style.opacity = '0.5';
    }
}



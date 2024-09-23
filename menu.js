
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

const itens = [];

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;

    itens.push({ codigo, nome, quantidade });
    alert('Item cadastrado com sucesso!');
    this.reset();
    document.getElementById('resultado').style.display = 'none'; // Esconde o resultado após cadastro
});

function buscarItem() {
    const codigoBusca = document.getElementById('busca').value;
    const itemEncontrado = itens.find(item => item.codigo === codigoBusca);
    const resultadoDiv = document.getElementById('resultado');

    if (itemEncontrado) {
        resultadoDiv.innerHTML = `
            <h3>${itemEncontrado.nome}</h3>
            <p>Quantidade em Estoque: ${itemEncontrado.quantidade}</p>
        `;
        resultadoDiv.style.display = 'block'; // Mostra a div se o item for encontrado
    } else {
        resultadoDiv.innerHTML = '<p>Item não encontrado.</p>';
        resultadoDiv.style.display = 'block'; // Mostra a div com a mensagem de não encontrado
    }
}

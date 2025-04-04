document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dados = Object.fromEntries(formData.entries());
    try{
        const resposta = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {'Content-type': 'application/json' },
            body: JSON.stringify(dados)
        });
        const resultado = await resposta.json();
        alert(resultado.message);
    } catch (erro) {
        console.error('Erro ao enviar o cadastro: ', erro);
        alert('Erro ao enviar cadastro. ');
    }
});


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
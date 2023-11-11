let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnEnviar = document.querySelector(".btn-enviar")
let portifolio = document.querySelector(".portifolio")
const img = document.querySelector(".img-port")

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.getElementById('form').addEventListener('submit', function (e){
    e.preventDefault();

    if (validaCampos()){
        Swal.fire({
          title: "Solicitação Enviada",
          position: "center",
          showConfirmButton: false,
          background: '#dee2e6',
          icon: "success",
          timer: 2000
        });
        setTimeout(()=>{
            this.submit();
        },1700)
    }
});

function validaCampos(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const problem = document.getElementById('problem').value;

    var regexNome = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexNumero = /^\d+$/;

    if (!nome || !email || !numero || !service || !problem) {
        exibirMensagemErro('Por favor, preencha todos os campos.');
        return false;
    }

    if (!regexNome.test(nome)) {
        exibirMensagemErro('Nome contém caracteres inválidos.');
        return false;
    }

    if (!regexEmail.test(email)) {
        exibirMensagemErro('Formato de email inválido.');
        return false;
    }

    if (!regexNumero.test(numero)) {
        exibirMensagemErro('Número de telefone deve conter apenas dígitos.');
        return false;
    }

    return true;
}

function exibirMensagemErro(mensagem) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: mensagem,
        showConfirmButton: false,
        timer: 1500,
        background: '#dee2e6',
    });
}


const controls = document.querySelectorAll('.control');
let currentItem = 0
const items = document.querySelectorAll('.img-port');
const maxItems = items.length;


controls.forEach(control => {
    control.addEventListener('click', (e) =>{
        const  isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        console.log('control', isLeft, currentItem, maxItems)

        items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
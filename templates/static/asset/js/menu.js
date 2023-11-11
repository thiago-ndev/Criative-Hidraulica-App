
console.log(1)
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnEnviar = document.querySelector(".btn-enviar")
let inputNome = document.getElementById('1')
let inputEmail = document.getElementById('2')
let inputNumero = document.getElementById('3')
let inputServico = document.getElementById('4')
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

btnEnviar.addEventListener('click', function(e){
    e.preventDefault();
    const nome = inputNome.value
    const email = inputEmail.value
    const numero = inputNumero.value
    const servico = inputServico.value

    window.alert(`Obrigado ${nome} sua solicitação foi recebida.`)

})



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
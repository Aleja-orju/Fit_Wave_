// se realizó el script para al momento de hacer click en menu hamburguesa se despliegue un submenu y permita cerrar dicha ventana
const menu = document.querySelector(".navbar");
const abrirMenuBtn = document.querySelector(".open-menu");
const cerrarMenuBtn = document.querySelector(".close-menu");

function tooggleMenu() {
    menu.classList.toggle("menu_opened");

}

abrirMenuBtn.addEventListener("click", tooggleMenu)
cerrarMenuBtn.addEventListener("click", tooggleMenu)

// scrip para carousel

window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToScroll: 1,
        slidesToShow: 1.5,
        draggable: true,
        dots: '.dots',
    

    })
})

window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista_1'), {
        slidesToScroll: 1,
        slidesToShow: 1.5,
        draggable: true,
        dots: '.dots',
    

    })
})

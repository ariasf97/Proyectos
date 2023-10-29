let customers = [{
    id: 1,
    img: "/3-Reviews/img/IMG-1828~3.jpg",
    name: "Harrison Arias Fajardo",
    description: "Desarrollador de Web con experiencia en diseño, instalación, pruebas y mantenimiento de sitios Web. Dominio de varias plataformas, lenguajes y sistemas integrados. Experiencia en las herramientas y procedimientos de desarrollo más vanguardistas. Capaz de autogestión eficaz en proyectos independientes. Buenas habilidades de colaboración dentro de un equipo productivo."
},
{
    id: 2,
    img: "/3-Reviews/img/leidy.jpeg",
    name: "Leidy Lorena arias ",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quidem facere, impedit ipsam autem dicta molestiae dolore architecto quaerat odit alias natus. Corrupti at officia totam praesentium dolores consectetur possimus."
},
{
    id: 3,
    img: "/3-Reviews/img/juan.jpeg",
    name: "Juan david villegas",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quidem facere, impedit ipsam autem dicta molestiae dolore architecto quaerat odit alias natus. Corrupti at officia totam praesentium dolores consectetur possimus."
},
{
    id: 4,
    img: "/3-Reviews/img/473417_454332627978719_685055979_o.jpg",
    name: "Adelfa maria fajardo",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quidem facere, impedit ipsam autem dicta molestiae dolore architecto quaerat odit alias natus. Corrupti at officia totam praesentium dolores consectetur possimus."
},
{
    id: 5,
    img: "/3-Reviews/img/matew.jpeg",
    name: "matew",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quidem facere, impedit ipsam autem dicta molestiae dolore architecto quaerat odit alias natus. Corrupti at officia totam praesentium dolores consectetur possimus."
},
]
const profileImg = document.querySelector("#customerImg");
const namePerson = document.querySelector("#name");
const description = document.querySelector("#contentDescription");
const nextItem = document.querySelector("#next");
const prevItem = document.querySelector("#prev");
const randomItem = document.querySelector('#Random');

let elemento = 0;

window.addEventListener('DOMContentLoaded', () => {
    content();
});

function content() {
    const item = customers[elemento];
    profileImg.src = item.img;
    namePerson.textContent = item.name;
    description.textContent = item.description;
}
nextItem.addEventListener('click', () => {
    elemento++
    if (elemento > customers.length - 1) {
        elemento = 0;
    }
    content();
});
prevItem.addEventListener('click', () => {
    elemento--
    if (elemento < 0) {
        elemento = customers.length - 1;
    }
    content();
});

randomItem.addEventListener('click', () => {
    elemento = Math.floor(Math.random() * customers.length)
    content();
});
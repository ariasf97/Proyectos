const menu = [
    {
        id: 1,
        title: "Pancakes de Chocolate",
        category: "DESAYUNO",
        price: 1.2,
        img: "/6-Carta/assets/img/Desayunos/item-1.webp",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Pizza",
        category: "ALMUERZO",
        price: 13.99,
        img: "/6-Carta/assets/img/Almuerzos/item-1.webp",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Helado",
        category: "REFIGERIO",
        price: 6.99,
        img: "/6-Carta/assets/img/Refigerios/item-1.webp",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Yogurt Griego",
        category: "DESAYUNO",
        price: 2.05,
        img: "/6-Carta/assets/img/Desayunos/item-2.webp",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Sanduches",
        category: "ALMUERZO",
        price: 22.99,
        img: "/6-Carta/assets/img/Almuerzos/item-2.webp",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Torta",
        category: "REFIGERIO",
        price: 18.99,
        img: "/6-Carta/assets/img/Refigerios/item-2.webp",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Ensalada",
        category: "DESAYUNO",
        price: 8.99,
        img: "/6-Carta/assets/img/Desayunos/item-3.webp",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "Tocino Americano",
        category: "ALMUERZO",
        price: 12.99,
        img: "/6-Carta/assets/img/Almuerzos/item-3.webp",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Mini Hamburgesas",
        category: "REFIGERIO",
        price: 16.99,
        img: "/6-Carta/assets/img/Refigerios/item-3.webp",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Carne",
        category: "CENA",
        price: 22.99,
        img: "/6-Carta/assets/img/Cenas/item-1.webp",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const menuContainer = document.querySelector(".menu");
const btnContainer = document.querySelector(".filters");

function displayMenuItems(menuItems) {
    const menuHTML = menuItems.map((item) => {
        return `
        <article class="menu-item">
        <img src=${item.img} alt=${item.title} />
        <div class="item-info">
            <header>
                <h4 class="item-title">${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>
    `;
    }).join("");

    menuContainer.innerHTML = menuHTML;
}

function displayMenuButtons() {
    const categories = ['TODOS', ...new Set(menu.map((item) => item.category))];
    const categoryBtns = categories.map((category) => {
        return `
        <button class="btn" data-id=${category}>
        ${category}
        </button>
    `;
    }).join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".btn");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", handleFilter);
    });
}
function handleFilter(event) {
    const category = event.currentTarget.dataset.id;
    const filteredMenu = category === "TODOS" ? menu : menu.filter((item) => item.category === category);
    displayMenuItems(filteredMenu);
}
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

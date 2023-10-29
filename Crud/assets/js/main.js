const f1 = document.querySelector('.f-1');
const inputData = document.getElementById('inputData');
const container = document.querySelector('.container');
const btnEnviardata = document.querySelector('.input-submit');

let editaElemento;
let editarLista = false;
let editarID = "";

f1.addEventListener('submit', enviarData);
window.addEventListener("DOMContentLoaded", cargarData);

function enviarData(e) {
    e.preventDefault();
    const data = inputData.value;
    const id = new Date().getTime().toString();

    if (data.trim() !== '' && !editaElemento) {
        const item = document.createElement('section');
        item.setAttribute('data-id', id);
        item.classList.add('item');
        item.innerHTML = `
            <p>${data}</p>
            <section class="btn-container">
                <button class="btn edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="btn delete">
                    <i class="fa-regular fa-delete-left"></i>
                </button>
            </section>
        `;
        const editBtn = item.querySelector('.btn.edit');
        editBtn.addEventListener("click", editarData);
        const delBtn = item.querySelector('.btn.delete');
        delBtn.addEventListener("click", eliminarData);
        agregarAlLocalStorage(id, data);
        valoresPredeterminados();
        container.appendChild(item);
        alert('Valor Agregado');
    } else if (data.trim() !== '' && editaElemento) {
        editaElemento.innerHTML = data;
        editLocalStorage(editarID, data);
        valoresPredeterminados();
        alert('Valor editado');
    } else {
        alert('Sin datos');
    }
};

function editarData(edit) {
    const data = edit.currentTarget.parentElement.parentElement;
    editaElemento = edit.currentTarget.parentElement.previousElementSibling;
    inputData.value = editaElemento.innerHTML;
    editarLista = true;
    editarID = data.dataset.id;
    btnEnviardata.textContent = "Editar";
}

function eliminarData(eliminar) {
    const data = eliminar.currentTarget.parentElement.parentElement;
    eliminarID = data.dataset.id;
    container.removeChild(data);
    valoresPredeterminados();
    ElminardelLocalStorage(eliminarID);
}

function obtenerLocalStorage() {
    console.log(localStorage)
    return localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
        
}

function agregarAlLocalStorage(id, value) {
    const inputData = { id, value };
    let items = obtenerLocalStorage();
    items.push(inputData);
    localStorage.setItem("items", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = obtenerLocalStorage() || [];
    const updatedItems = items.map(item => {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('items', JSON.stringify(updatedItems));
}

function ElminardelLocalStorage(id) {
    let items = obtenerLocalStorage();
    items = items.filter(function (item) {
        return item.id !== id;
    });
    localStorage.setItem("items", JSON.stringify(items));
}

function valoresPredeterminados() {
    inputData.value = "";
    editarLista = false;
    editarID = "";
    btnEnviardata.textContent = "Enviar";
}

function cargarData() {
    let items = obtenerLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            crearLista(item.id, item.value);
        });
    }
}

function crearLista(id, data) {
    const item = document.createElement('section');
    item.setAttribute('data-id', id);
    item.classList.add('item');
    item.innerHTML = `
        <p>${data}</p>
        <section class="btn-container">
            <button class="btn edit">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="btn delete">
                <i class="fa-regular fa-delete-left"></i>
            </button>
        </section>
    `;
    const editBtn = item.querySelector('.btn.edit');
    editBtn.addEventListener("click", editarData);
    const delBtn = item.querySelector('.btn.delete');
    delBtn.addEventListener("click", eliminarData);

    container.appendChild(item);
}
let colors = []
const spanColor = document.querySelector(".colors");
let action = document.querySelectorAll('.btn');
action.forEach(function (action) {
    action.addEventListener("click", function (e) {
        const classSelect = e.currentTarget.classList;
        if (classSelect.contains('cgeneral')) {
            for (let i = 0; i < 20; i++) {
                color = getRandomColor();
                colors.push(color);
            }
        } else if (classSelect.contains('chexadecimal')) {
            for (let i = 0; i < 20; i++) {
                color = getRandomHexColor();
                colors.push(color);
            }
        } else {
            colors = ['#FFFFFF']
        }
        const randomNumber = getRandomNumer();
        document.body.style.backgroundColor = colors[randomNumber];
        spanColor.textContent = colors[randomNumber];
    });
});
function getRandomNumer() {
    return Math.floor(Math.random() * colors.length);
}
function getRandomColor() {
    let random = Math.random();
    if (random < 0.5) {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    } else {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let a = Math.random().toFixed(2);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
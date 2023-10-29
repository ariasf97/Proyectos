const btnAction = document.querySelectorAll('.btn');

btnAction.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const container = e.currentTarget.parentElement.parentElement;
        const dataElements = container.querySelectorAll('.data');
        dataElements.forEach((data) => {
            data.classList.toggle('show-data');
        });
    });
});

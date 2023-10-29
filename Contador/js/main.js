let count = 0;
const value = document.querySelector('#value');
let btnAction = document.querySelectorAll('.btn');

btnAction.forEach(function(btnAction){
    btnAction.addEventListener("click", function(e){
        const classSelect = e.currentTarget.classList;
        if(classSelect.contains('increase')){
            count++ 
        }else if(classSelect.contains('decrease')){
            count--  
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "#88e87e";
        }else if(count < 0){
            value.style.color = "#ff565b";
        }else{
            value.style.color = "#e2e2e2";
        }
        value.textContent = count;
    });
});


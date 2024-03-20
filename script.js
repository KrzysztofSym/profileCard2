const btn = document.querySelector('.more');
const drop = document.querySelector('.dropdown-menu');



// function btnFunction() {
// btn.addEventListener('click', ()=> {
//     drop.classList.toggle('active');
// });
// }

function btnFunction() {
    btn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the body click event from being triggered
        drop.classList.toggle('active');
    });

    document.body.addEventListener('click', (event) => {
        if (!drop.contains(event.target) && event.target !== btn) {
            drop.classList.remove('active');
        }
    });
}

btnFunction();

    

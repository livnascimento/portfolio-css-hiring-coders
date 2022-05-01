const showBtn = document.querySelector('.fa-circle-plus');
const description = document.querySelector('#description');

showBtn.addEventListener('click', (e) => {
    description.classList.toggle('show');

    if (showBtn.classList == 'fa-solid fa-circle-plus'){
        showBtn.classList.replace('fa-circle-plus', 'fa-circle-minus');
    } else {
        showBtn.classList.replace('fa-circle-minus', 'fa-circle-plus');
    }

});



function carusel () {
    const prev = document.querySelector('#back');
    const forward = document.querySelector('#forward');

    const list = document.querySelectorAll('.photo_img');
    let counter = 0;
    let precounter;
    prev.addEventListener('click', ()=> {
        
        counter === 0? counter = list.length-1 : counter -= 1;
        counter === list.length-1? precounter = 0 : precounter = counter+1;
        list[counter].classList.add('active');
        list[precounter].classList.remove('active');
    })

    forward.addEventListener('click', ()=> {
        counter === list.length-1 ? counter = 0 : counter += 1;
        counter === 0? precounter = list.length-1 : precounter = counter-1;
        list[counter].classList.add('active');
        list[precounter].classList.remove('active');
    })
}

function openMenu () {
    const button = document.querySelector('#button__menu');
    const menu = document.querySelector('.nav_small');

    button.addEventListener('click', () => {
        menu.classList.add('active');
    })
}

function closeMenu(){
    const button = document.querySelector('#button__close');
    const menu = document.querySelector('.nav_small');

    button.addEventListener('click', () => {
        menu.classList.remove('active');
    })
}

carusel();
openMenu ();
closeMenu();
let listElements = document.querySelectorAll('.lista-item');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => { //detecta el evento click en los items de la lista del menú
        let menu = listElement.nextElementSibling;
        menu.classList.toggle('active');
    });
});


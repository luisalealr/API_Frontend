let listElements = document.querySelectorAll('.lista-item');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => { //detecta el evento click en los items de la lista del menú
        let menu = listElement.nextElementSibling;
        menu.classList.toggle('active');
    });
});

//ejecutar funcion con click
document.getElementById("btn-open").addEventListener("click", open_close_menu);

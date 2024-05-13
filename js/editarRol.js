const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const manu = dropdown.querySelector('.manu');
    const option = dropdown.querySelectorAll('.manu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('carect-rotate');
        manu.classList.toggle('manu-open');
    });
    option.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('carect-rotate');
            manu.classList.remove('manu-open');
            option.forEach(option => {
                option.classList.remove('active');

            });
            option.classList.add ('active');
        });
    });
});
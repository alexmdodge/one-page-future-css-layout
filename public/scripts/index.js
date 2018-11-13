function toggleMinimize(event) {
    const el = event.target;

    if(el.classList.contains('minimized')) {
        el.innerText = '-';
        el.classList.remove('minimized');
        el.parentNode.classList.remove('minimized__container');
    } else {
        el.innerText = '+';
        el.classList.add('minimized');
        el.parentNode.classList.add('minimized__container');
    }
}

let minimizeButtons = document.querySelectorAll('.minimized__button');
minimizeButtons = [...minimizeButtons];

for (let button of minimizeButtons) {
    button.addEventListener('click', toggleMinimize);
}
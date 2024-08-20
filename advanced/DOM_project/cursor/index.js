let crsr = document.querySelector('.crsr');
let home = document.querySelector('.home');

home.addEventListener('mousemove', (details) => {
    crsr.style.left = details.x + 'px';
    crsr.style.top = details.y + 'px';
})


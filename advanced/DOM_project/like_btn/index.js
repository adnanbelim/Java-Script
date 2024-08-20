document.addEventListener('DOMContentLoaded', () => {
    let like = document.querySelector('.like');
    let hero_section = document.querySelector('.hero-section');

    if (like && hero_section) {
        hero_section.addEventListener('dblclick', () => {
            like.style.transform = 'translate(-50%, -50%) scale(1)'; // Change scale to 1 for visibility
            like.style.opacity = '0.8';

            setTimeout(() => {
                like.style.transform = 'translate(-50%, -50%) scale(0)';
            }, 2000)

            setTimeout(() => {
                like.style.opacity = '0';
            }, 1000)
        });
    } else {
        console.error('Element(s) not found');
    }
});


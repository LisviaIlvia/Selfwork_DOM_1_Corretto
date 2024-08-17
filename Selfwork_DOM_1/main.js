

let paragrafo = document.querySelectorAll('p');


let changeColorText = document.querySelector('#changeColorText');
let bolder = document.querySelector('#bolder');
let nascondi = document.querySelector('#nascondi');



changeColorText.addEventListener('click', () => {

    paragrafo.forEach((p) => {
        p.style.color = randomColor();
    });
});

bolder.addEventListener('click', () => {

    paragrafo.forEach((p) => {
        p.classList.toggle('bolder');

    });
});

nascondi.addEventListener('click', () => {

    paragrafo.forEach((p) => {
        p.classList.toggle('none');

    });
});


function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


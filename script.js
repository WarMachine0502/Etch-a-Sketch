const grid = document.querySelector('.gridbox');
const brow1 = document.querySelector('.row1');
const brow2 = document.querySelector('.row2');

function genGrid(r, c) {
    for(let i = 0; i < (r * c); i++) {
        const div = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${r}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${c}, 1fr)`;
        grid.appendChild(div).classList.add('box');
        div.style.border = 'none';
    }
}

const black = document.createElement('button');
function blackCell(){
    const boxes = grid.querySelectorAll('.box');
    black.textContent = 'Black';
    black.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        }))
    })
    brow1.appendChild(black).classList.add('btn');
}

const rgb = document.createElement('button');
function rgbCell(){
    const boxes = grid.querySelectorAll('.box');
    rgb.textContent = 'RGB';
    rgb.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }))
    })
    brow1.appendChild(rgb).classList.add('btn');
}

const dim= document.createElement('button');
function dimension() {
    dim.textContent = 'Resize Grid';
    dim.addEventListener('click', () => {
        const size = prompt('Enter Grid Dimensions');
        if(size === null || size < 1) {
            reset();
            genGrid(16, 16);
            blackCell();
            rgbCell();
        } else {
            reset();
            genGrid(size, size);
            blackCell();
            rgbCell();
        } 
    })
    brow2.appendChild(dim).classList.add('btn');
}

function reset() {
    const boxes = grid.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
}

window.onload = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
        }));
    }

genGrid(16, 16);
dimension();
blackCell();
rgbCell();
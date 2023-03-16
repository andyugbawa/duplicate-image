const btnAdd=document.querySelector('.btn-add');
const divNew=document.querySelector('.div-container');
const image= [
    './image/boot.jpg',
     './image/phone.jpg',
    './image/shirt.jpg',
     './image/shoe.jpg',
    './image/laptop.jpg',
    './image/belt.jpg',
    './image/facecap.jpg',
    './image/shoe2.jpg',
    './image/watch.jpg',
    './image/bear.jpg',
    './image/hyena.jpg',
    './image/tiger.jpg',
    './image/lion.jpg',
    './image/monkey.jpg',
    './image/elephant.jpg',
    './image/kangaroo.jpg',
    './image/squirell.jpg',
    './image/catfish.jpg',

];

btnAdd.addEventListener('click',addNew);

let count = 0;

function addNew(){
    const newDiv=document.createElement('div');
    newDiv.classList.add('gas')
    document.body.appendChild(newDiv);
    divNew.appendChild(newDiv);
    const imageCard=document.createElement('img')
    divNew.appendChild(imageCard);
    imageCard.classList.add('fast')
    imageCard.src = image[count]
    count++
}



// Card Zoom js

const cardItem = document.querySelector('.card')
const cardImg = document.querySelector('.card-img');

cardItem.addEventListener('mouseover', ()=>{
    cardImg.classList.remove("card-img")
    cardImg.classList.add("image-script")
});

cardItem.addEventListener('mouseout', ()=>{
    cardImg.classList.toggle("image-script")
    cardImg.classList.add("card-img")
});